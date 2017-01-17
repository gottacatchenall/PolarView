import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const beaconDefinitionSchema = new Schema({
	name: { type: 'String', required: true },
	description: { type: 'String', required: true },
	value: { type: 'String', required: true },
	example: { type: 'String', required: true },
	bit_length: { type: 'String', required: true },
	byte_length: { type: 'String', required: true },
	data_type: { type: 'String', required: true },
	eng_unit_conv: { type: 'String', required: true },
	units: { type: 'String', required: true },
});

export default mongoose.model('beaconDefinition', beaconDefinitionSchema, 'beaconDefinition');
