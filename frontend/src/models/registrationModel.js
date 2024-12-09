export const AccommodationChoices = {
  YES:"yes",
  NO:"no"
}

export const GenderChoices = {
  MALE: 'male',
  FEMALE: 'female',
  OTHERS: 'others'
}

export const QualificationChoices = {
  UG: 'UG',
  PG: 'PG',
  HIGH_SCHOOL: '10th and below',
  SR_SEC: '11th and 12th',
  OTHERS: 'others'
}

export const CommitteeChoices = {
  DISEC: 'UNGA|DISEC',
  UNHRC: 'UNHRC',
  UNSC: 'UNSC|CCC',
  AIPPM: 'AIPPM',
  AISM: 'AISM',
  SOCHUM: 'UNGA|SOCHUM',
  IP: 'International Press|IP'
}

export const RegistrationModel = {
  name: '',
  institution: '',
  number: '',
  alt_contact:'',
  email_id: '',
  sex: null,
  qualification: '',
  experience: '',
  committee_pref: ['','',''],
  portfolio_pref: [['','',''],['','',''],['','','']],
  accommodation: null,
}
