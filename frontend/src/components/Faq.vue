<template>
  <div class="faq-page">
    <h1 class="faq-title">FAQ</h1>
    <div class="faq-container" v-for="(faq, index) in faqs" :key="index">
      <div class="faq-header" @click="toggle(index)">
        {{ faq.question }}
        <span class="arrow">{{ faq.open ? "▲" : "▼" }}</span>
      </div>
      <div v-if="faq.open" class="faq-answer">
        <p v-if="faq.answerType === 'text'">{{ faq.answer }}</p>
        <ul v-if="faq.answerType === 'list-text'">
          The agendas can be excessed through our website <a :href="faq.link" target="_blank">{{ faq.link }}</a> as well as our Instagram at <a :href="faq.insta" target="_blank">{{ faq.insta }}</a>. The agendas at a glance are as follows :-
          <li v-for="(item, idx) in faq.list" :key="idx">{{ item }}</li>
        </ul>
        <p v-if="faq.answerType === 'link'">
          {{ faq.answer }}
          <a :href="faq.link" target="_blank">{{ faq.link }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "Who all can register in MUNarchy’25?",
          answer:
            "Anyone interested in participating in MUNarchy’25 can register, regardless of experience. The event is open to students from across the globe who are willing to engage in Model United Nations discussions and debates.",
          open: false,
          answerType: "text",
        },
        {
          question: "Where can I register for MUNarchy’25?",
          answer: "First-time users can sign up and log in to complete the registration. The website provides a one-stop solution for all broadcasts and information, including committee details, portfolios, and payment confirmation. Registrations are now live at ",
          link: "https://irmun.iitr.ac.in/",
          open: false,
          answerType: "link",
        },
        {
          question: "Do I need prior experience to register in MUNarchy’25?",
          answer:
            "MUNarchy is committed to build a comprehensive environment for all the beginners and especially the first-time MUNers. There will be a briefing and guiding session for all the committees 2 weeks prior to the event. A community would then be formed for discussions, clarifications and guidance for the MUN which would include the IRMUN team to maintain fresh interaction with the Executive Board during the conference. ",
          open: false,
          answerType: "text",
        },
        {
          question: "What are the agendas for MUNarchy’25?",
          answer:"The agendas can be excessed through our website  as well as our Instagram at https://www.instagram.com/ir_mun.s/. The agendas at a glance are as follows :-",
          link: "https://irmun.iitr.ac.in/",
          insta:"https://www.instagram.com/ir_mun.s/",
          list: [
            "SOCHUM: Addressing discrimination in conflicted/post-conflicted regions.",
            "UNHRC: Safeguarding women’s and minority rights in Afghanistan post-Taliban takeover.",
            "AIPPM: Deliberating reforms in India's electoral system.",
            "UNGA DISEC: Discussing modern warfare and the situation in Syria.",
            "AISM: Exploring caste-based census and reservation policies.",
            " Continuous Crisis Committee: A futuristic take on a world in crisis in 2040.",

          ],
          open: false,
          answerType: "list-text",
        },
        {
          question: "What are the dates for MUNarchy’25?",
          answer:"MUNarchy’25 would be held from 17th to 19th January at IIT Roorkee.",
          open: false,
          answerType: "text",
        },
        {
          question: "What is the prize worth of the event?",
          answer:"MUNarchy offers 1.75 Lakhs worth of prizes including 1.50 lakh as in-hand cash prizes, the detailed breakdown can be found at our website ",
          link: "https://irmun.iitr.ac.in/",
          open: false,
          answerType: "link",
        },
        {
          question: "How many meals will be included in the accommodation option?",
          answer:"The participants taking the accommodation under MUNarchy would be provided with 7 meals ( 2 breakfasts, 2 lunches and 3 dinners and snacks during the committee), the ones opting out of the accommodation would be provided with the meals during the committees i.e. (2 lunches and snacks).",
          open: false,
          answerType: "text",
        },
        {
          question: "When will I receive the prize money?",
          answer:"The cash prizes would be transferred immediately though there still might be a delay of a couple of days due to online banking regulations.",
          open: false,
          answerType: "text",
        },
        {
          question: "What will be the dress code for the event?",
          answer:"The committees would include both Traditional and Western attire, further details for the same would be communicated to the participants by the organzing team.",
          open: false,
          answerType: "text",
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Frozito";
  src: url("@/assets/fonts/Frozito.ttf") format("truetype");
}

.faq-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
}

.faq-title {
  font-family: "Assassin$", sans-serif;
  color: white;
  font-size: 3rem;
  margin-bottom: 2rem;
  letter-spacing: 2px;
}

.faq-container {
  width: 60%;
  background: rgba(30, 38, 47, 0.95);
  border-radius: 10px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
}

.faq-header {
  font-family: "Copperplate", sans-serif;
  color: white;
  font-size: 1.5rem;
  background: #1e262f;
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s;
}

.faq-header:hover {
  background: #3a4e61;
}

.arrow {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.faq-answer {
  background: #f9f9f9;
  color: #333;
  padding: 1.5rem;
  font-size: 1.1rem;
}

.faq-answer ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.faq-answer a {
  color: #1e262f;
  text-decoration: underline;
  font-weight: bold;
}

@media (max-width: 768px) {
  .faq-container {
    width: 90%;
  }

  .faq-header {
    font-size: 1.2rem;
  }

  .faq-title {
    font-size: 2.5rem;
  }
}
</style>
