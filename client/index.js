import * as tf from '@tensorflow/tfjs';

import { TITLE } from './config'
import { MnistData } from './function';

// Asynchronous function because model must be loaded Asynchrously and Global
(async () => {

function createLogEntry(entry) {
    document.getElementById('log').innerHTML += '<br>' + entry;
}

const model = await tf.loadLayersModel('http://192.168.2.12:3000/model.json');
createLogEntry('Model loaded from the server');

let data;
async function load() {
    data = new MnistData();
    await data.load();
}

const BATCH_SIZE = 64;
const TRAIN_BATCHES = 150;

async function train() {

    createLogEntry('Started training on Client Web-Browser');

    model.compile({
        optimizer: tf.train.sgd(0.15),
        loss: 'categoricalCrossentropy'
	});

    for (let i = 0; i < TRAIN_BATCHES; i++) {
        const batch = tf.tidy(() => {
            const batch = data.nextTrainBatch(BATCH_SIZE);
            batch.xs = batch.xs.reshape([BATCH_SIZE, 28, 28, 1]);
            return batch;
        });

        await model.fit(
            batch.xs, batch.labels, {batchSize: BATCH_SIZE, epochs: 3}
        );

        tf.dispose(batch);

        await tf.nextFrame();
    }
    createLogEntry('Training completed');

    await model.save('http://192.168.2.12:3000/model.json/upload')
    createLogEntry('Updated Model sent back to server');

}

async function predict(batch) {
    tf.tidy(() => {
        const input_value = Array.from(batch.labels.argMax(1).dataSync());

        const div = document.createElement('div');
        div.className = 'prediction-div';

        const output = model.predict(batch.xs.reshape([-1, 28, 28, 1]));

        const prediction_value = Array.from(output.argMax(1).dataSync());
        const image = batch.xs.slice([0, 0], [1, batch.xs.shape[1]]);

        const canvas = document.createElement('canvas');
        canvas.className = 'prediction-canvas';
        draw(image.flatten(), canvas);

        const label = document.createElement('div');
        label.innerHTML = 'Original Value: ' + input_value;
        label.innerHTML += '<br>Prediction Value: ' + prediction_value;

        if (prediction_value - input_value == 0) {
            label.innerHTML += '<br>Value recognized successfully';
        } else {
            label.innerHTML += '<br>Recognition failed!'
        }

        div.appendChild(canvas);
        div.appendChild(label);
        document.getElementById('predictionResult').appendChild(div);
    });
}

function draw(image, canvas) {
    const [width, height] = [28, 28];
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    const imageData = new ImageData(width, height);
    const data = image.dataSync();
    for (let i = 0; i < height * width; ++i) {
      const j = i * 4;
      imageData.data[j + 0] = data[i] * 255;
      imageData.data[j + 1] = data[i] * 255;
      imageData.data[j + 2] = data[i] * 255;
      imageData.data[j + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
}

document.getElementById('selectTestDataButton').addEventListener('click', async (el,ev) => {
    const batch = data.nextTestBatch(1);
    await predict(batch);
});

async function main() {
    document.title = TITLE;
    await load();
    await train();
    document.getElementById('selectTestDataButton').disabled = false;
    document.getElementById('selectTestDataButton').innerText = "Ramdomly Select Test Data And Predict";
}

main();

})();