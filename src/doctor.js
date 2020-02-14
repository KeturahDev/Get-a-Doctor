export class Doctors {
  constructor(symptom) {
    this.symptom = symptom;
  }

  async getFetch() {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${this.symptom}&location=45.523064%2C%20-122.676483%2C100&user_location=45.523064%2C-122.413&skip=0&limit=10&${process.env.API_KEY}`)
    let jsonResponse = response.json()
    console.log('response is:', jsonResponse);
  }
}