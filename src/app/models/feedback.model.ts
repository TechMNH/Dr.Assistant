import { Rating, UniqueId } from "./common.model";

export class Feedback {
    ailmentId: string = null;
    doctorId: UniqueId = new UniqueId('doc');
    patientId: UniqueId = new UniqueId('pat');
    rating: Rating = new Rating();
    description?: string = null;
}