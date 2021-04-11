export default {
  currentStep: 'Ask',
  steps: [
    'Ask',
    'Review',
    'Complete'
  ],
  chats: [
    {
      type: 'ans',
      message: `Hey! Is there any to give information about?`,
      options: null,
      radios: null
    },
    {
      type: 'que',
      message: `Hi there, can you please tell me about the return policy? I'm having problem with the product. Thanks!`,
      options: null,
      radios: null
    },
    {
      type: 'ans',
      message: `In the meantime, there articles might help!`,
      options: [
        'General Return Policy',
        'Return policy for electronics',
        'Return policy for holiday season'
      ],
      radios: null
    },
    {
      type: 'ans',
      message: `Do the above seem to answer your question?`,
      options: null,
      radios: [
        'Yes',
        'No'
      ]
    }
  ],
  faqs: [
    {
      que: `How do I see the questions I've asked?`,
      ans: `Vae, festus bubo!`
    },
    {
      que: `Why do I need to create an account to post a question?`,
      ans: `Scutums sunt agripetas de secundus apolloniates.`
    },
    {
      que: `Varius pess ducunt ad mortem?`,
      ans: `A falsis, domina secundus poeta.`
    }
  ]
}