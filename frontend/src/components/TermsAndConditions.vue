<template>
  <div class="terms-container">
    <h1 class="header">Terms and Conditions</h1>

    <section class="terms-section">
      <h2>Definitions</h2>
      <p>
        The term <strong>“Team”</strong> refers to the event organizing team of MUNarchy, mainly including but not limited to members of IIT Roorkee United Nations (IRMUN).
        The term <strong>“Event”</strong> refers to the “MUNarchy” MUN conference from 17th to 19th January at IIT Roorkee.
      </p>
    </section>

    <section class="terms-section">
      <h2>Accommodation</h2>
      <ul>
        <li>Check-in Time is <strong>3 PM</strong>, and Check-out time is <strong>10 AM</strong>.</li>
        <li>Consuming alcohol is prohibited in the Guest House.</li>
        <li>
          The Team will not arrange the daily commute to and from the residence and the conference venue. The Team will not bear any such expense.
        </li>
        <li>
          The booking will automatically be cancelled if the institute needs this accommodation for emergent official purposes during the Event.
        </li>
        <li>
          If your arrival/departure time is before/after check-in/check-out time, you may stay in your room/suite if it has not been previously allotted to another guest.
          Otherwise, you may stay in the waiting room area.
        </li>
        <li>
          Valid proof of identification may be required upon inspection by the IIT Roorkee Vigilance team. Failure to provide valid proof will result in disciplinary action by competent authorities.
        </li>
        <li>
          Accommodation will be arranged in guest houses. However, if guest house rooms are unavailable, accommodation will be provided in hotel rooms outside the campus.
          The charges will be covered by the Team from the accommodation fees collected.
        </li>
        <li>
          IIT Roorkee guest houses may or may not be located inside the main campus. Regardless, all IIT Roorkee guest houses are under the jurisdiction of the IIT Roorkee administration.
        </li>
        <li>
          Rooms will be provided on a shared basis. Participants may be accommodated with other MUNarchy participants.
          While the Team will try to accommodate a contingent together, this cannot be guaranteed.
        </li>
        <li>
          Priority for accommodation will be given in the following order:
          <ol>
            <li>School students</li>
            <li>Female participants</li>
            <li>All other participants</li>
          </ol>
        </li>
      </ul>
    </section>

    <section class="terms-section">
      <h2>Payment</h2>
      <ul>
        <li>Payment will be made to the organizing Team for the Event.</li>
        <li>
          Participants may be required to submit transaction IDs and other payment details.
          These details must be provided when requested for payment verification.
        </li>
        <li>
          All fees are <strong>non-refundable</strong>, irrespective of participation or presence at the Event. Once payment is made, no refunds will be processed.
        </li>
        <li>
          Payment confirmations will be done by Team representatives, after which further portfolio processing will be conducted.
        </li>
        <li>
          Refunds related to technical glitches will be processed after the Event concludes. This includes any technical issues such as those on the website.
        </li>
        <li>
          The Organizing Team reserves the right to modify payment terms and conditions at any time. Updates will be effective immediately upon publication on the Event website.
        </li>
      </ul>
    </section>

    <section class="terms-section">
      <h2>Miscellaneous</h2>
      <ul>
        <li>Participants are advised to follow a proper code of conduct during the event and during their residence in IITR. Participants agree to abide by the code of conduct.</li>
        <li>
          Code of Conduct:
          <ul>
              <li>Respect all delegates, organisers, and staff.</li>
              <li>Adhere to the appropriate dress code and behave professionally.</li>
              <li>Any form of discrimination, harassment or misconduct will not be tolerated and would be acted upon as per IITR administration rules and procedures</li>
              <li>Engage constructively and respectfully in all debates, committees and discussions.</li>
          </ul>
        </li>
        <li>
          The data collected by IRMUN will be handled appropriately and will not be misused by IRMUN.
        </li>
        <li>
          The data may be shared with third parties to improve the quality of event/ promotional activities.
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "TermsAndConditions",
};
</script>

<style scoped>
.terms-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: white;
}

.header {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
}

.terms-section {
  margin-bottom: 2rem;
}

.terms-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.terms-section ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

.terms-section ul li {
  margin-bottom: 0.8rem;
}

.terms-section ol {
  list-style-type: decimal;
  margin-left: 2rem;
}

.terms-section ol li {
  margin-bottom: 0.5rem;
}
</style>
