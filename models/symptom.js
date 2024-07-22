const mongoose = require('mongoose');   

const symptomSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Symptom = mongoose.model('Symptom', symptomSchema);