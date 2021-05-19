const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CounterSchema = Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});

var OrderSchema = new Schema({
    orderNumber: {type: String},
    status: {
        type: String, 
        enum:["Ordered","Pending","Success","Out for delivery", "Created"], 
        default:"Task Created"
    },
    store: {type: Schema.Types.ObjectId, ref:"store"},
    product: {
        quantity:{type: Number, rquired:true},
        productId:{type: Schema.Types.ObjectId, ref:"product"}
    }
},{ timestamps:true }) 

OrderSchema.pre('save', function(next) {
    var doc = this;
    Counter.findByIdAndUpdate({_id: 'OrderId'}, {$inc: { seq: 1} },{new: true, upsert: true}, function(error, counter)   {
        if(error)
            return next(error);
            doc.orderNumber = counter.seq;
        next();
    });
});

Order = mongoose.model("order", OrderSchema);
Counter = mongoose.model("counter", CounterSchema);

module.exports={ 
    Order,
    Counter,
}