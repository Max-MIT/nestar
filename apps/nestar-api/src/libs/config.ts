import { ObjectId } from 'bson';

export const shapeIntoMongoObjecctId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};
