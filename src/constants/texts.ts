const TEXTS = {
  header: {
    getStarted: "Սկսել",
    profile: "Իմ պրոֆիլը",
    changePassword: "Փոխել գաղտնաբառը",
    subscription: "Բաժանորդագրություն",
    logout: "Ելք",
  },
  validation: {
    required: {
      brandName: "Անունը պարտադիր է",
      headline: "Վերնագիրը պարտադիր է",
      description: "Նկարագրությունը պարտադիր է",
      industry: "Ոլորտը պարտադիր է",
      region: "Մարզը պարտադիր է",
      phone: "Հեռախոսահամարը պարտադիր է",
      email: "Էլ. փոստը պարտադիր է",
      website: "Կայքը պարտադիր է",
      serviceName: "Ծառայության անունը պարտադիր է",
      serviceDescription: "Նկարագրությունը պարտադիր է",
      productDescription: "Նկարագրությունը պարտադիր է",
      productName: "Արտադրանքի անունը պարտադիր է",
    },
    format: {
      email: "Էլ. փոստը սխալ է",
      website: "Կայքի հղումը սխալ է",
    },
  },
  login: {
    title: "Ողջույն!",
    subtitle: "Չունե՞ք հաշիվ",
    register: "Գրանցվել",
  },
  loginForm: {
    fields: {
      email: "Ձեր էլ. փոստը",
      password: "Ձեր գաղտնաբառը",
    },
    placeholders: {
      email: "name@email.com",
      password: "********",
    },
    validation: {
      emailRequired: "Էլ. փոստը պարտադիր է",
      emailInvalid: "Էլ. փոստը սխալ է",
      passwordRequired: "Գաղտնաբառը պարտադիր է",
    },
    forgot: "Վերականգնել գաղտնաբառը",
    button: "Մուտք",
  },
  forgotPassword: {
    titles: {
      step1: "Վերականգնել գաղտնաբառը",
      step3: "Ստեղծել նոր գաղտնաբառ",
    },
    descriptions: {
      step1: "Խնդրում ենք մուտքագրել ձեր էլ. փոստը, որով գրանցվել եք համակարգ",
      step2: "Մենք ուղարկել ենք կոդը ձեր էլ.փոստի հասցեին",
    },
    back: "Վերադառնալ",
    invalid: "Անվավեր մուտք",
  },
  forgotPasswordStep1: {
    field: "Ձեր էլ. փոստը",
    placeholder: "name@email.com",
    validation: {
      required: "Էլ. փոստը պարտադիր է",
      invalid: "Էլ. փոստը սխալ է",
    },
    button: "Ստանալ կոդը",
  },
  forgotPasswordStep2: {
    label: "Թվային կոդ",
    validation: {
      length: "Կոդը պետք է լինի 6 նիշ",
      required: "Թվային կոդը պարտադիր է",
    },
    confirm: "Հաստատել",
  },
  forgotPasswordStep3: {
    fields: {
      password: "Նոր գաղտնաբառը",
      passwordConfirm: "Կրկնեք նոր գաղտնաբառը",
    },
    placeholders: {
      password: "********",
      passwordConfirm: "********",
    },
    validation: {
      passwordRequired: "Գաղտնաբառը պարտադիր է",
      confirmRequired: "գաղտնաբառը պարտադիր է",
      mismatch: "Գաղտնաբառերը չեն համընկնում",
    },
    button: "Հաստատել",
  },
  register: {
    done: "Կատարված է",
    back: "Հետ",
  },
  registerStep1: {
    title: "Գրանցվել",
    subtitle: "Արդեն ունեք հաշիվ?",
    login: "Մուտք գործեք",
    fields: {
      firstName: "Ձեր անունը",
      lastName: "Ձեր ազգանունը",
      email: "Ձեր էլ. փոստը",
      password: "Ձեր գաղտնաբառը",
      passwordConfirm: "Կրկնեք գաղտնաբառը",
    },
    placeholders: {
      firstName: "John",
      lastName: "Doe",
      email: "name@email.com",
      password: "********",
      passwordConfirm: "********",
    },
    button: "Շարունակել",
    validation: {
      firstName: "Անունը պարտադիր է",
      lastName: "Ազգանունը պարտադիր է",
      emailRequired: "Էլ. փոստը պարտադիր է",
      emailInvalid: "Էլ. փոստը սխալ է",
      password: "Գաղտնաբառը պարտադիր է",
      passwordConfirm: "գաղտնաբառը պարտադիր է",
    },
  },
  registerStep2: {
    title: "Հաստատեք էլփոստի հասցեն",
    subtitle: "Մենք ուղարկել ենք կոդը ձեր էլ.փոստի հասցեին",
    label: "Թվային կոդ",
    validation: {
      required: "Կոդը պարտադիր է",
      length: "Կոդը պետք է լինի 6 նիշ",
    },
    continue: "Շարունակել",
    resend: "Կրկին ուղարկել կոդը",
    resendSuccess: "Կոդը հաջողությամբ ուղարկվեց",
  },
  registerStep3: {
    title: "Վերնագիր",
    subtitle: "Հանդիսանում եք որպես իրավաբանական անձ, թե ֆիզիկական անձ:",
    orgTypes: {
      legal: "Իրավաբանական անձ",
      physical: "Ֆիզիկական անձ",
    },
    fields: {
      tin: "ՀՎՀՀ",
      name: "Ընկերության լրիվ և ճշգրիտ անվանումը",
      address: "Ընկերության հասցեն",
      headFullName: "Ղեկավարի Անուն Ազգանուն",
    },
    placeholders: {
      tin: "ՀՎՀՀ",
      name: "Company name",
      address: "Address",
      headFullName: "Name Surname",
    },
    validation: {
      orgType: "Ընտրությունը պարտադիր է",
      tin: "ՀՎՀՀ-ն պարտադիր է",
      name: "Անունը պարտադիր է",
      address: "Հասցեն պարտադիր է",
      headFullName: "Ղեկավարի անունը պարտադիր է",
    },
    continue: "Շարունակել",
  },
  createProfile: {
    title: "Պրոֆայլի ստեղծում",
    done: "Կատարված է",
  },
  createProfileStep1: {
    uploadCover: "Ներբեռնել շապիկի նկարը",
    uploadProfile: "Ներբեռնել պրոֆայլի նկարը",
    descriptionLabel: "Կարճ նկարագրություն",
    descriptionPlaceholder: "Կարճ նկարագրություն",
    industryLabel: "Ոլորտ",
    industryPlaceholder: "Ընտրել ոլորտը",
    continue: "Շարունակել",
    skip: "Բաց թողնել",
    validation: {
      description: "Նկարագրությունը պարտադիր է",
      industry: "Ընդհանուր ոլորտ ընտրելը պարտադիր է",
    },
  },
  createProfileStep2: {
    stateLabel: "Մարզ",
    statePlaceholder: "Մարզ",
    companySizeLabel: "Աշխատակիցների քանակ",
    companySizePlaceholder: "Ընտրել աշխատակիցների քանակը",
    options: ["1-5", "5-10", "10-20", "20-50", "50-100", "100+"],
    continue: "Շարունակել",
    skip: "Բաց թողնել",
    validation: {
      state: "Մարզը պարտադիր է",
      companySize: "Company size ընտրելը պարտադիր է",
    },
  },
  profileEdit: {
    title: "Անձնական տվյալներ",
    fields: {
      brandName: "Անվանում",
      headline: "Վերնագիր",
      description: "Նկարագրություն",
      industry: "Ոլորտ",
      region: "Մարզ",
      phone: "Հեռախոսահամար",
      email: "Էլ. փոստ",
      website: "Կայքի հղում",
    },
    placeholders: {
      brandName: "մուտքագրել Անվանումը",
      headline: "մուտքագրել Վերնագիր",
      description: "մուտքագրել Նկարագրություն",
      industry: "Ընտրել Ոլորտ",
      region: "մուտքագրել Մարզ",
      phone: "մուտքագրել Հեռախոսահամար",
      email: "մուտքագրել Էլ. փոստ",
      website: "մուտքագրել Կայքի հղում",
    },
    buttons: {
      cancel: "Չեղարկել",
      save: "Պահպանել",
    },
  },
  registerSuccess: {
    title: "Բարի գալուստ Rednet",
    description: "Տես վերջին հնարավորությունները մեր դասընթացում։",
    createProfile: "Պրոֆայլի ստեղծում",
    skip: "Բաց թողնել",
  },
  serviceModal: {
    title: {
      create: "Ստեղծել ծառայություն",
      edit: "Խմբագրել ծառայությունը",
    },
    fields: {
      name: "Ծառայության անուն",
      description: "Նկարագրություն",
      upload: "Ներբեռնել լուսանկար",
    },
    placeholders: {
      name: "Մուտքագրեք ծառայության անունը",
      description: "Մուտքագրեք նկարագրություն",
    },
    buttons: {
      cancel: "Չեղարկել",
      add: "Ավելացնել ծառայություն",
      update: "Թարմացնել ծառայությունը",
    },
  },
  productModal: {
    title: {
      create: "Ստեղծել Արտադրանք",
      edit: "Խմբագրել Արտադրանքը",
    },
    fields: {
      name: "Արտադրանքի անուն",
      description: "Նկարագրություն",
      upload: "Ներբեռնել լուսանկար",
    },
    placeholders: {
      name: "Մուտքագրեք Արտադրանքի անունը",
      description: "Մուտքագրեք նկարագրություն",
    },
    buttons: {
      cancel: "Չեղարկել",
      add: "Ավելացնել Արտադրանք",
      update: "Թարմացնել Արտադրանքը",
    },
  },
  profileInfo: {
    alt: "Օգտագործողի կողմից ընտրված պատկերը։",
    editPhoto: "Խմբագրել լուսանկարը",
    badge: "ՊԵՏՔԱ ՃՇՏԵԼ",
    region: "Մարզ",
  },
  profileAnalytics: {
    title: "Վերլուծություն",
    viewsLabel: "33 պրոֆայլի դիտում",
    viewsSubtext: "Վերջին 90 օրվա դիտումները",
  },
  profileServices: {
    title: "Ծառայություններ",
    empty: "Ծառայություններ չկան",
    seeMore: "Ցուցադրել ևս 2 ծառայություն",
    addServices: "Ավելացնել ծառայություններ",
  },
  serviceItem: {
    edit: "Խմբագրել",
    delete: "Ջնջել",
  },
  profileProducts: {
    title: "Արտադրանքներ",
    empty: "Արտադրանքներ չկան",
    seeMore: "Ցուցադրել ևս 2 Արտադրանք",
    addProduct: "Ավելացնել Արտադրանք",
  },
  productItem: {
    edit: "Խմբագրել",
    delete: "Ջնջել",
  },
};

export { TEXTS };
