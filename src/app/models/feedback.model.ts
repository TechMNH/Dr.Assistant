import { Rating, UniqueId } from "./common.model";

export class Feedback {
    doctorId: UniqueId = new UniqueId();
    patientId: UniqueId = new UniqueId();
    rating: Rating = new Rating();
    description?: string = null;
}