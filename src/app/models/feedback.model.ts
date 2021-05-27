import { Rating, UniqueId } from "./common.model";

export class Feedback {
    doctorId: UniqueId;
    patientId: UniqueId;
    rating: Rating;
    description?: string;
}