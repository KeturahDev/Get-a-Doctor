export class Doctors {
  constructor(input) {
    this.input = input;
    this.jsonifiedDoctors = '';
  }

  async getFetch() {
    try {
      let fetchedResponse = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${this.input}&location=45.523064%2C%20-122.676483%2C100&user_location=45.523064%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`)
      let jsonResponse = await fetchedResponse.json()
      this.jsonifiedDoctors = jsonResponse.data;
      if (this.jsonifiedDoctors.length < 1) {
        this.jsonifiedDoctors = false
      }
      console.log('response is:', jsonResponse);
      console.log('specified response is:', this.jsonifiedDoctors);
    } catch (error) {
      console.log('oh no! error!:', error.message);
    }
  }
}