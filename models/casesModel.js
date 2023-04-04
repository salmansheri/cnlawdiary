import mongoose from "mongoose";

const casesSchema = new mongoose.Schema({
  regno: {
    type: Number,
    required: true,
  },
  CNRno: {
    type: Number,
    required: true,
  },
  clientname: {
    type: String,
    required: true,
  },
  clientstatus: {
    type: String,
    required: true,
  },
  casename: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  nextdate: {
    type: Date,
  },
  casestatus: {
    type: String,
    default: "all",
  },
  IA: {
    type: Array,
  },
  act: {
    type: String,
    required: true,
  },
  oppositionparty: {
    type: String,
    required: true,
  },
  oppositionadvocate: {
    type: String,
    required: true,
  },
  hearingdate: {
    type: Date, 
    
  }, 
  decideddate: {
    type: Date, 

  }, 
  courtname: {
    type: String
  }, 
  place: {
    type: String, 

  }, 
  result: {
    type: String

  }


});

const casesModel = mongoose.models.case || mongoose.model("case", casesSchema);

export default casesModel;
