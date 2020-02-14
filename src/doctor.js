export class Doctors {
  constructor(issue, name) {
    this.issue = issue;
    this.name = name;
    this.jsonifiedDoctors = '';
    this.status = 0
    this.result = ''
  }

  async getFetch() {
    try {
      let fetchedResponse = await fetch(`https://.betterdoctor.com/2016-03-01/doctors?name=${this.name}&query=${this.issue}&location=45.523064%2C%20-122.676483%2C100&user_location=45.523064%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      console.log(fetchedResponse.status)
      if (fetchedResponse.ok && fetchedResponse.status == 200) {
        let jsonResponse = await fetchedResponse.json();
        this.jsonifiedDoctors = jsonResponse.data;
        if (this.jsonifiedDoctors.length < 1) {
          this.result = 'none';
        }
      } else {
        this.jsonifiedDoctors = false;
        this.status = fetchedResponse.status;
      }
      // console.log('specified response is:', this.jsonifiedDoctors);
    } catch (error) {
      console.log('oh no! error!:', error.message);
    }
  }
}