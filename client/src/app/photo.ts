export class Photo {
	_id: string;
	name: string;
	path: string;

	likes: number;
	username: string;
	date: Date;
	comments: string[];
	
	reports: number;
}