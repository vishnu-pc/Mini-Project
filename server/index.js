/**
 * This is the Main entry point for the server app.
 */

tf = require('@tensorflow/tfjs-node');

var model;

const init = async () => {
	// This function is called on server start
    // Your code goes here...
    
    /*

    model = tf.sequential();

	model.add(tf.layers.conv2d({
        inputShape: [28, 28, 1],
        kernelSize: 5,
        filters: 8,
        strides: 1,
        activation: 'relu',
        kernelInitializer: 'VarianceScaling'
    }));

    model.add(tf.layers.maxPooling2d({
        poolSize: [2,2],
        strides: [2,2]
    }));

    model.add(tf.layers.conv2d({
        kernelSize: 5,
        filters: 16,
        strides: 1,
        activation: 'relu',
        kernelInitializer: 'VarianceScaling'
    }));

    model.add(tf.layers.maxPooling2d({
        poolSize: [2,2],
        strides: [2,2]
    }));

    model.add(tf.layers.flatten());

    model.add(tf.layers.dense({
        units: 10,
        kernelInitializer: 'VarianceScaling',
        activation: 'softmax'
    }));
    console.log('Model created on the server')
	
    model.save('file:///Users/Vishnu/Desktop/Code/Mini-Project/routes/my-model');
    console.log('Model saved on the server')

    */

}

module.exports = {
	init,
}
