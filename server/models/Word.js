const { Schema } = require('mongoose');

const wordSchema = new Schema(
    {
      wordId: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      word: {
        type: String,
      },
      category: {
        type: String
      },
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );
  
  module.exports = wordSchema;