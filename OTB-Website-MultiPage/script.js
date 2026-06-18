"use strict";
var IMG = {
  hero: "./image/hero.png",
  about: "./image/about.png",
  seminar: "./images/seminar.png",
  gift: "./images/gift.png",
};

var PRODUCTS = [
  {
    title: {
      vi: "Tài Trợ Sản Phẩm Mẫu (Hospital Sampling)",
      en: "Hospital Sampling Sponsorship",
    },
    description: {
      vi: "Phân phối mẫu sản phẩm miễn phí trực tiếp đến các mẹ bầu và sản phụ tại bệnh viện, phòng khám và cơ sở y tế trên toàn quốc.",
      en: "Distribute free product samples directly to pregnant women and new mothers through hospitals, clinics, and healthcare facilities nationwide.",
    },
    points: [
      {
        vi: "Triển khai tại 150+ bệnh viện và cơ sở y tế",
        en: "Implemented in 150+ hospitals and healthcare facilities",
      },
      {
        vi: "Tiếp cận hơn 1,2 triệu mẹ và bé mỗi năm",
        en: "Reach over 1.2 million mothers and babies annually",
      },
      {
        vi: "Tạo ấn tượng đầu tiên với độ tin cậy cao",
        en: "Create a trusted first impression",
      },
    ],
    shape: "gift",
    color: 1388651,
    img: "https://bizweb.dktcdn.net/100/307/659/articles/ttspm.jpg?v=1749284428647",
  },

  {
    title: {
      vi: "Hội Thảo Dành Cho Mẹ Và Bé (Mom And Baby Workshop)",
      en: "Mom & Baby Workshop",
    },
    description: {
      vi: "Chuỗi hội thảo và lớp học tiền sản giúp mẹ bầu được trang bị kiến thức chăm sóc thai kỳ, sinh nở và nuôi con khoa học.",
      en: "A series of prenatal classes and workshops that equip mothers with practical knowledge on pregnancy, childbirth, and child care.",
    },
    points: [
      {
        vi: "Hội thảo tiền sản và chăm sóc trẻ",
        en: "Prenatal and baby care workshops",
      },
      {
        vi: "Tương tác trực tiếp với thương hiệu",
        en: "Direct interaction with brands",
      },
      {
        vi: "Tăng mức độ gắn kết và ghi nhớ",
        en: "Increase engagement and brand recall",
      },
    ],
    shape: "knot",
    color: 1784440,
    img: "https://bizweb.dktcdn.net/100/307/659/articles/hhts.jpg?v=1749284471387",
  },

  {
    title: {
      vi: "Hội Thảo Bác Sĩ & Chuyên Gia Y Tế",
      en: "Medical Expert & Doctor Seminar",
    },
    description: {
      vi: "Các hội thảo chuyên sâu dành cho bác sĩ, điều dưỡng và chuyên gia y tế nhằm cập nhật kiến thức và kết nối với thương hiệu.",
      en: "Professional seminars for doctors, nurses, and healthcare experts to update knowledge and connect with healthcare brands.",
    },
    points: [
      {
        vi: "Tiếp cận mạng lưới bác sĩ và chuyên gia",
        en: "Access a network of doctors and specialists",
      },
      {
        vi: "Gia tăng uy tín thương hiệu",
        en: "Enhance brand credibility",
      },
      {
        vi: "Xây dựng niềm tin trong ngành y tế",
        en: "Build trust within the healthcare industry",
      },
    ],
    shape: "ico",
    color: 1191011,
    img: "https://bizweb.dktcdn.net/100/307/659/articles/hht.jpg?v=1749284507023",
  },

  {
    title: {
      vi: "Tài Trợ Sản Phẩm & Quà Tặng",
      en: "Product & Gift Sponsorship",
    },
    description: {
      vi: "Tài trợ sản phẩm và quà tặng tại các sự kiện bệnh viện, chương trình cộng đồng và hoạt động dành cho mẹ và bé trên toàn quốc.",
      en: "Provide products and gifts for hospital events, community programs, and nationwide mother-and-baby activities.",
    },
    points: [
      {
        vi: "Tài trợ sự kiện và chương trình cộng đồng",
        en: "Sponsor events and community programs",
      },
      {
        vi: "Tăng nhận diện thương hiệu qua quà tặng",
        en: "Boost brand awareness through gifts",
      },
      {
        vi: "Phủ sóng tại nhiều tỉnh thành",
        en: "Expand visibility across multiple provinces",
      },
    ],
    shape: "dodeca",
    color: 1586281,
    img: "https://bizweb.dktcdn.net/100/307/659/articles/tai-tro-san-pham-qua-tang.jpg?v=1749013304500",
  },

  {
    title: {
      vi: "Listing Sản Phẩm Vào Hệ Thống Nhà Thuốc Bệnh Viện",
      en: "Hospital Pharmacy Product Listing",
    },
    description: {
      vi: "Đưa sản phẩm của thương hiệu vào danh mục phân phối chính thức tại hệ thống nhà thuốc bệnh viện công và tư.",
      en: "Place products into official distribution channels within public and private hospital pharmacy systems.",
    },
    points: [
      {
        vi: "Tiếp cận khách hàng ngay tại điểm bán",
        en: "Reach customers directly at the point of sale",
      },
      {
        vi: "Tăng độ phủ trong hệ thống y tế",
        en: "Expand coverage within healthcare systems",
      },
      {
        vi: "Hỗ trợ tăng trưởng doanh số bền vững",
        en: "Support sustainable sales growth",
      },
    ],
    shape: "gift",
    color: 1388651,
    img: "https://bizweb.dktcdn.net/100/307/659/articles/listing-san-pham-vao-he-thong-nha-thuoc-benh-vien.jpg?v=1749013288437",
  },

  {
    title: {
      vi: "Cộng Đồng Bác Sĩ Sản – Nhi",
      en: "Obstetrics & Pediatrics Doctor Community",
    },
    description: {
      vi: "Mạng lưới kết nối bác sĩ sản khoa, nhi khoa và nhân viên y tế nhằm chia sẻ kiến thức và đồng hành cùng thương hiệu.",
      en: "A professional community connecting obstetricians, pediatricians, and healthcare professionals to share expertise and collaborate with brands.",
    },
    points: [
      {
        vi: "Kết nối bác sĩ sản và nhi khoa",
        en: "Connect obstetricians and pediatricians",
      },
      {
        vi: "Xây dựng quan hệ chuyên môn lâu dài",
        en: "Develop long-term professional relationships",
      },
      {
        vi: "Tăng độ tin cậy trong cộng đồng y tế",
        en: "Strengthen trust within the medical community",
      },
    ],
    shape: "ico",
    color: 1191011,
    img: "https://bizweb.dktcdn.net/100/307/659/articles/cong-dong-bac-si-san-nhi.jpg?v=1749013262203",
  },

  {
    title: {
      vi: "Healthcare Digital Marketing",
      en: "Healthcare Digital Marketing",
    },
    description: {
      vi: "Chiến lược marketing tích hợp dữ liệu y tế và công nghệ số hiện đại nhằm triển khai các chiến dịch quảng cáo trực tuyến chính xác và hiệu quả.",
      en: "Integrated healthcare marketing strategies powered by medical data and digital technologies for highly targeted online campaigns.",
    },
    points: [
      {
        vi: "Khai thác dữ liệu y tế thực tế",
        en: "Leverage real healthcare data",
      },
      {
        vi: "Tối ưu hiệu quả quảng cáo đa kênh",
        en: "Optimize multi-channel advertising performance",
      },
      {
        vi: "Tiếp cận đúng đối tượng mục tiêu",
        en: "Reach the right target audience",
      },
    ],
    shape: "dodeca",
    color: 1586281,
    img: "https://bizweb.dktcdn.net/100/307/659/articles/healthcare-digital-marketing.jpg?v=1749011979587",
  },
];
var SERVICES7 = [
  {
    vn: "Tài Trợ Mẫu Sản Phẩm",
    en: "Hospital Sampling",
    d: "Product samples delivered directly to pregnant mothers and newborns at maternity and pediatric hospitals nationwide.",
  },
  {
    vn: "Hội Thảo Dành Cho Mẹ Và Bé",
    en: "Mom & Baby Workshop",
    d: "Classes blending medical experts, prenatal education and hands-on brand experience for mothers.",
  },
  {
    vn: "Hội Thảo Bác Sĩ & Chuyên Gia Y Tế",
    en: "Doctors & Medical Experts Seminar",
    d: "Connecting brands with doctors and nurses through seminars, training and professional communications.",
  },
  {
    vn: "Tài Trợ Sản Phẩm & Quà Tặng",
    en: "Product & Gift Sponsorship",
    d: "Sponsorship solutions matched to campaign goals to grow brand awareness and goodwill.",
  },
  {
    vn: "Listing Sản Phẩm Vào Nhà Thuốc Bệnh Viện",
    en: "Listing into Hospital Pharmacy System",
    d: "Getting products listed into the pharmacy systems of partner hospitals.",
  },
  {
    vn: "Cộng Đồng Bác Sĩ Sản – Nhi",
    en: "Obstetricians & Pediatricians Community",
    d: "Building and engaging a trusted community of obstetric and pediatric medical professionals.",
  },
  {
    vn: "Healthcare Digital Marketing",
    en: "Healthcare Digital Marketing",
    d: "Digital strategy and content that reaches parents and medical audiences online, with measurable results.",
  },
];
var JOURNEY = [
  {
    yr: "2011",
    h: "OTB is founded",
    p: "Outside The Box is established as a specialist healthcare and mom-and-baby marketing agency, focused on the hospital and clinic channel.",
  },
  {
    yr: "2014",
    h: "Mothers' Appreciation Day",
    p: "OTB x Bobby x Bệnh Viện Phụ Sản Trung Ương host a large-scale appreciation festival for mothers.",
  },
  {
    yr: "2015",
    h: "Welcoming the New Year with families",
    p: "OTB x Huggies x Bệnh Viện Từ Dũ deliver the 'Mom & Baby Welcome the New Year 2015' festival.",
  },
  {
    yr: "Growth",
    h: "Reaching mothers at scale",
    p: "Long-term programs with leading brands — Huggies reaching 500,000+ mothers a year, Anlene's 100,000 free milk cups, and Molfix reaching 300,000 mothers.",
  },
  {
    yr: "2023",
    h: "12 years of impact",
    p: "OTB celebrates its 12th anniversary at Liberty Central Saigon (28/08/2023) and runs elderly health-care festivals including at Bắc Ninh General Hospital.",
  },
  {
    yr: "Today",
    h: "Vietnam's leading mom-and-baby healthcare agency",
    p: "1.2M+ mothers reached every year, 2,500+ doctors at seminars, 150+ partner hospitals and 800+ events delivered.",
  },
];
var PROJECTS_BIG = [
  {
    cat: "sampling",
    brand: "Huggies",
    desc: "Gửi trao yêu thương đến hơn 500.000 mẹ bầu mỗi năm.",
    url: "https://www.otbcreatives.com/otb-x-huggies-gui-trao-yeu-thuong-den-hon-500-000-me-bau-moi-nam",
  },
  {
    cat: "sampling",
    brand: "Anlene",
    desc: "Trao tặng 100.000 ly sữa miễn phí.",
    url: "https://www.otbcreatives.com/copy-of-otb-x-monte-tai-tro-san-pham-va-qua-tang",
  },
  {
    cat: "sampling",
    brand: "Cerelac",
    desc: "Tài trợ sản phẩm & quà tặng cho 10 bệnh viện đầu ngành.",
    url: "https://www.otbcreatives.com/otb-x-cerelac-tai-tro-san-pham-va-qua-tang-cho-10-benh-vien-dau-nganh",
  },
  {
    cat: "sampling",
    brand: "Cerelac",
    desc: "Tài trợ sản phẩm cho gần 150.000 bà mẹ.",
    url: "https://www.otbcreatives.com/copy-of-otb-x-gerber-tai-tro-benh-vien",
  },
  {
    cat: "sampling",
    brand: "Bobby",
    desc: "Tài trợ sản phẩm dùng thử cho hơn 15 cơ sở y tế.",
    url: "https://www.otbcreatives.com/otb-x-bobby-tai-tro-san-pham-dung-thu-cho-hon-15-co-so-y-te",
  },
  {
    cat: "sampling",
    brand: "Milna",
    desc: "Tài trợ sản phẩm & quà tặng miễn phí cho 20 bệnh viện.",
    url: "https://www.otbcreatives.com/copy-of-otb-x-bobby-benh-vien-phu-san-trung-uong-ngay-hoi-tri-an-cac-ba-me-cua-nam-2014",
  },
  {
    cat: "sampling",
    brand: "Moony",
    desc: "Tài trợ sản phẩm & quà tặng.",
    url: "https://www.otbcreatives.com/otb-x-moony-tai-tro-san-pham-qua-tang",
  },
  {
    cat: "sampling",
    brand: "Sure Prevent Gold",
    desc: "Tài trợ sản phẩm và quà tặng.",
    url: "https://www.otbcreatives.com/copy-of-otb-x-greencross-tai-tro-san-pham-tai-benh-vien",
  },
  {
    cat: "sampling",
    brand: "Monte",
    desc: "Tài trợ sản phẩm và quà tặng.",
    url: "https://www.otbcreatives.com/otb-x-monte-tai-tro-san-pham-va-qua-tang",
  },
  {
    cat: "workshop",
    brand: "Elevit",
    desc: "Lớp học làm cha mẹ.",
    url: "https://www.otbcreatives.com/otb-x-elevit-lop-hoc-lam-cha-me",
  },
  {
    cat: "workshop",
    brand: "Lactacyd",
    desc: "Hội thảo tiền sản dành cho mẹ bầu.",
    url: "https://www.otbcreatives.com/otb-x-lactacyd-hoi-thao-tien-san-danh-cho-me-bau",
  },
  {
    cat: "workshop",
    brand: "BV Hoàn Mỹ Sài Gòn",
    desc: "Hội thảo 'Sanh An Toàn – Những Điều Cần Biết'.",
    url: "https://www.otbcreatives.com/otb-x-benh-vien-hoan-my-sai-gon-hoi-thao-sanh-an-toan-nhung-dieu-can-biet",
  },
  {
    cat: "workshop",
    brand: "BV Phụ Sản Trung Ương",
    desc: "Ngày hội dành cho mẹ và bé.",
    url: "https://www.otbcreatives.com/otb-x-benh-vien-phu-san-trung-uong-ngay-hoi-danh-cho-me-va-be",
  },
  {
    cat: "workshop",
    brand: "BV Hạnh Phúc",
    desc: "Hội thảo phương pháp giảm đau khi sinh.",
    url: "https://www.otbcreatives.com/otb-x-benh-vien-hanh-phuc-hoi-thao-phuong-phap-giam-dau-khi-sinh",
  },
  {
    cat: "workshop",
    brand: "BV Hạnh Phúc",
    desc: "Hội thảo nhi khoa.",
    url: "https://www.otbcreatives.com/otb-x-benh-vien-hanh-phuc-hoi-thao-nhi-khoa",
  },
  {
    cat: "workshop",
    brand: "HIPP",
    desc: "Hội thảo tiền sản dành cho mẹ bầu.",
    url: "https://www.otbcreatives.com/otb-x-hipp-hoi-thao-tien-san-danh-cho-me-bau",
  },
  {
    cat: "workshop",
    brand: "Happy Event",
    desc: "Tài trợ sản phẩm & hội thảo.",
    url: "https://www.otbcreatives.com/copy-of-otb-x-nestle-hospital-sponsorship-gerber-cerelac",
  },
  {
    cat: "workshop",
    brand: "Obimin",
    desc: "Tổ chức 70 hội thảo tiền sản dành cho mẹ bầu.",
    url: "https://www.otbcreatives.com/copy-of-otb-x-bepanthen-nurse-to-be-brand-ambassador",
  },
  {
    cat: "seminar",
    brand: "Johnson's Baby",
    desc: "Hội thảo y tế dành cho 100 y tá và điều dưỡng.",
    url: "https://www.otbcreatives.com/otb-x-johnson-s-baby-hoi-thao-y-te-danh-cho-100-y-ta-va-dieu-duong",
  },
  {
    cat: "seminar",
    brand: "Huggies x BV Từ Dũ",
    desc: "Hội thảo khoa học cho gần 100 y bác sĩ.",
    url: "https://www.otbcreatives.com/otb-x-huggies-benh-vien-tu-du-hoi-thao-khoa-hoc-cho-gan-100-y-bac-si",
  },
  {
    cat: "seminar",
    brand: "Huggies",
    desc: "Hội thảo khoa học cho hơn 200 y bác sĩ.",
    url: "https://www.otbcreatives.com/otb-x-huggies-hoi-thao-khoa-hoc-cho-hon-200-y-bac-si",
  },
  {
    cat: "seminar",
    brand: "BV Hạnh Phúc",
    desc: "Hội thảo chăm sóc sức khỏe cho 1000 người.",
    url: "https://www.otbcreatives.com/otb-x-benh-vien-hanh-phuc-hoi-thao-cham-soc-suc-khoe-cho-1000-nguoi",
  },
  {
    cat: "seminar",
    brand: "Columbia Asia Bình Dương",
    desc: "Hội thảo tầm soát đái tháo đường cho hơn 1000 người cao tuổi.",
    url: "https://www.otbcreatives.com/otb-x-columbia-asia-binh-duong-hoi-thao-tam-soat-nguy-co-dai-thao-duong-cho-hon-1000-nguoi-cao-tuoi",
  },
  {
    cat: "seminar",
    brand: "BV Hữu Nghị",
    desc: "Hội thảo chăm sóc sức khỏe cho hơn 500 người cao tuổi.",
    url: "https://www.otbcreatives.com/otb-x-benh-vien-huu-nghi-hoi-thao-cham-soc-suc-khoe-cho-hon-500-nguoi-cao-tuoi",
  },
  {
    cat: "gift",
    brand: "GreenCross",
    desc: "Tài trợ sản phẩm tại bệnh viện.",
    url: "https://www.otbcreatives.com/otb-x-greencross-tai-tro-san-pham-tai-benh-vien",
  },
  {
    cat: "gift",
    brand: "Molfix",
    desc: "Hành trình lan tỏa yêu thương đến 300.000 mẹ Việt.",
    url: "https://www.otbcreatives.com/otb-x-molfix-hanh-trinh-lan-toa-yeu-thuong-den-300-000-me-viet",
  },
  {
    cat: "gift",
    brand: "Bobby x BV Phụ Sản TW",
    desc: "Ngày hội tri ân các bà mẹ của năm 2014.",
    url: "https://www.otbcreatives.com/otb-x-bobby-benh-vien-phu-san-trung-uong-ngay-hoi-tri-an-cac-ba-me-cua-nam-2014",
  },
  {
    cat: "gift",
    brand: "Huggies x BV Từ Dũ",
    desc: "Ngày hội 'Mẹ và bé đón chào năm mới 2015'.",
    url: "https://www.otbcreatives.com/otb-x-huggies-benh-vien-tu-du-ngay-hoi-me-va-be-don-chao-nam-moi-2015",
  },
  {
    cat: "gift",
    brand: "Huggies x BV Hùng Vương",
    desc: "Ngày hội chăm sóc sức khỏe mẹ & bé.",
    url: "https://www.otbcreatives.com/otb-x-huggies-benh-vien-hung-vuong-ngay-hoi-cham-soc-suc-khoe-me-be",
  },
  {
    cat: "gift",
    brand: "Bobby x BV Từ Dũ",
    desc: "Ngày hội 'Mẹ và bé năng động'.",
    url: "https://www.otbcreatives.com/otb-x-bobby-benh-vien-tu-du-ngay-hoi-me-va-be-nang-dong",
  },
];
var WORK_CATS = [
  ["all", "All work"],
  ["sampling", "Hospital Sampling"],
  ["workshop", "Mom & Baby Workshop"],
  ["seminar", "Doctor Seminars"],
  ["gift", "Product & Gift"],
];
var FEATURES = [
  {
    t: "Verified hospital access",
    d: "Established, trusted relationships across 150+ maternity and pediatric hospitals nationwide.",
    ic: '<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3"/>',
  },
  {
    t: "Connected medical network",
    d: "Direct connection to the doctors, nurses and experts who shape every parent's choices.",
    ic: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  },
  {
    t: "Massive trusted reach",
    d: "1.2M+ mothers reached every year through high-trust, real-world experiences.",
    ic: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
  },
  {
    t: "Professional & transparent",
    d: "Clear, accountable delivery your brand and compliance teams can rely on.",
    ic: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>',
  },
  {
    t: "Customized solutions",
    d: "Programs tailored to each brand, audience and product stage — never one-size-fits-all.",
    ic: '<path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>',
  },
  {
    t: "14+ years of experience",
    d: "Since 2011, OTB has delivered 800+ events with deep mom-and-baby market mastery.",
    ic: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  },
];
var VALUES4 = [
  {
    vn: "Chuyên biệt & Thấu hiểu",
    en: "Specialized & Understanding",
    p: "We communicate openly and listen closely, capturing the creative brief from the very start and keeping it consistent throughout delivery.",
  },
  {
    vn: "Tận tâm & Đồng hành",
    en: "Dedicated & Companioning",
    p: "Every project aims to care for, support and connect — a true companion to hospitals, medical staff and mothers. We don't just provide a service; we live our clients' goals.",
  },
  {
    vn: "Đổi mới & Hiệu quả",
    en: "Innovative & Effective",
    p: "We pioneer technology, creative content and optimized process for clear, measurable communication — the right target, the right person, the right moment.",
  },
  {
    vn: "Kết nối giá trị cộng đồng",
    en: "Connecting Community Value",
    p: "Each campaign bridges brand, hospital, healthcare and the mom-and-baby community — spreading real value and building lasting trust.",
  },
];
var NEWS3 = [
  {
    img: "https://bizweb.dktcdn.net/100/307/659/articles/untitled-1.jpg?v=1749113158987",
    date: "14 SEP",
    title: "'Elderly Health-Care Festival' at Bắc Ninh General Hospital",
    url: "https://www.otbcreatives.com/da-die-n-ra-nga-y-ho-i-cham-so-c-su-c-khoe-nguo-i-cao-tuo-i-ta-i-be-nh-vie-n-da-khoa-tinh-bac-ninh-ngay-12-09-2023-14-09-2023",
  },
  {
    img: "https://bizweb.dktcdn.net/100/307/659/articles/12-nam.jpg?v=1749113277570",
    date: "31 AUG",
    title: "A 12-Year Journey — Our Pride",
    url: "https://www.otbcreatives.com/hanh-trinh-12-nam-niem-tu-hao-cua-chung-toi",
  },
  {
    img: "https://bizweb.dktcdn.net/100/307/659/articles/test-nua.jpg?v=1749113337060",
    date: "27 JUN",
    title: "OTB Helps Leading Brands Reach Expecting Mothers",
    url: "https://www.otbcreatives.com/otb-mang-san-pham-tot-gia-yeu-thuong-den-me-tai-benh-vien-giup-me-tiep-can-va-trai-nghiem-cac-thuong-hieu-ta-sua-cho-me-va-be",
  },
];
var NETWORK = [
  "BV Từ Dũ",
  "BV Hùng Vương",
  "BV Phụ Sản Trung Ương",
  "BV Hữu Nghị",
  "BV Hạnh Phúc",
  "BV Hoàn Mỹ Sài Gòn",
  "Columbia Asia Bình Dương",
  "BV Đa Khoa Bắc Ninh",
];
var RECOG = [
  "https://bizweb.dktcdn.net/100/307/659/themes/653195/assets/people-say-1.png?1751527063631",
  "https://bizweb.dktcdn.net/100/307/659/files/thu-cam-on-2.jpg?v=1749106378017",
  "https://bizweb.dktcdn.net/100/307/659/themes/653195/assets/people-say-2.png?1751527063631",
  "https://bizweb.dktcdn.net/100/307/659/files/thu-cam-on-3.jpg?v=1749106378097",
  "https://bizweb.dktcdn.net/100/307/659/themes/653195/assets/people-say-3.png?1751527063631",
];
var PARTNERS = [
  "Huggies",
  "Anlene",
  "Elevit",
  "Bobby",
  "Cerelac",
  "Molfix",
  "Moony",
  "HIPP",
  "Johnson's Baby",
  "Lactacyd",
  "Sure Prevent Gold",
  "Monte",
  "GreenCross",
  "Milna",
];
var KB =
  "You are the OTB Assistant, the friendly virtual concierge for OTB Creatives Group (Outside The Box), shown on their website (otbcreatives.com). Answer visitor questions about OTB, its programs, and general queries, warmly and concisely. Only state facts about OTB that are given here; if unsure, invite the visitor to contact OTB. ABOUT: OTB (Outside The Box) is Vietnam's leading healthcare and mom-and-baby marketing agency, founded around 2011 (14+ years). It connects trusted brands with mothers and medical professionals through real-world, high-trust experiences. REACH: 1.2M+ mothers per year; 2,500+ doctors at seminars; 150+ partner hospitals; 800+ events. SERVICES (7): Hospital Sampling; Mom & Baby Workshop; Doctors & Medical Experts Seminar; Product & Gift Sponsorship; Listing Products into Hospital Pharmacy System; Obstetricians & Pediatricians Community; Healthcare Digital Marketing. WHY OTB: verified hospital access; connected medical network; massive trusted reach; professional and transparent delivery; customized solutions. VALUES: Specialized & Understanding; Dedicated & Companioning; Innovative & Effective; Connecting Community Value. PARTNER HOSPITALS include: Từ Dũ, Hùng Vương, Phụ Sản Trung Ương, Hữu Nghị, Hạnh Phúc, Hoàn Mỹ, Columbia Asia, Đa Khoa Bắc Ninh. BRANDS: Huggies, Anlene, Elevit, Bobby, Cerelac, Molfix, Moony, HIPP, Johnson's Baby, Lactacyd, Sure Prevent Gold, Monte, GreenCross, Milna. CONTACT: Hotline 0947 70 10 10; email nhansu@otbcreatives.com; office 44 đường số 6, KDC CityLand, P.5, Q. Gò Vấp, TP.HCM; Mon-Sat 8:00-18:00; Facebook available. Keep replies under ~120 words unless asked for detail.";
var RM =
  window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}
function el(id) {
  return document.getElementById(id);
}

/* ---------- RENDER ---------- */
function productCard(p, i, mode) {
  const lang = currentLang || "en";

  var btn =
    mode === "home"
      ? '<button class="btn btn-out" onclick="nav(\'services\')">See services</button>'
      : '<button class="btn btn-out" onclick="openProduct(' +
        i +
        ')">Inspect in 3D <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="3"/></svg></button>';

  var pts = (p.points || [])
    .map(function (x) {
      return "<li>" + esc(x[lang]) + "</li>";
    })
    .join("");

  return (
    '<article class="prod rv' +
    (i % 2 ? " rv-d1" : "") +
    '">' +
    '<div class="prod-top"><span class="pn">0' +
    (i + 1) +
    "</span>" +
    '<img src="' +
    esc(p.img) +
    '" alt="' +
    esc(p.title[lang]) +
    '" loading="lazy" onerror="this.style.display=\'none\'"></div>' +
    '<div class="prod-body"><h3>' +
    esc(p.title[lang]) +
    '</h3><div class="pd">' +
    esc(p.description[lang]) +
    "</div>" +
    "<ul>" +
    pts +
    "</ul>" +
    btn +
    "</div></article>"
  );
}
function renderProducts() {
  var g = el("prod-grid");

  if (g) {
    g.innerHTML = PRODUCTS.map(function (p, i) {
      return productCard(p, i, "full");
    }).join("");
  }

  var h = el("home-svc");

  if (h) {
    h.innerHTML = PRODUCTS.map(function (p, i) {
      return productCard(p, i, "home");
    }).join("");
  }
  revealIn(document);
}
function renderServices() {
  var g = el("svc-grid");
  if (!g) return;
  g.innerHTML = SERVICES7.map(function (s, i) {
    return (
      '<div class="svc-card rv' +
      (" rv-d" + ((i % 3) + 1)) +
      '"><div class="si">' +
      (i + 1) +
      "</div><h4>" +
      esc(s.vn) +
      '</h4><div class="en">' +
      esc(s.en) +
      "</div><p>" +
      esc(s.d) +
      "</p></div>"
    );
  }).join("");
}
function renderJourney() {
  var g = el("journey-list");
  if (!g) return;
  g.innerHTML = JOURNEY.map(function (j) {
    return (
      '<div class="tl-item rv"><div class="tl-yr">' +
      esc(j.yr) +
      "</div><h4>" +
      esc(j.h) +
      "</h4><p>" +
      esc(j.p) +
      "</p></div>"
    );
  }).join("");
}
function catLabel(c) {
  for (var i = 0; i < WORK_CATS.length; i++) {
    if (WORK_CATS[i][0] === c) return WORK_CATS[i][1];
  }
  return c;
}
function workCard(w) {
  return (
    '<a class="work-card" href="' +
    esc(w.url) +
    '" target="_blank" rel="noopener"><div class="wc">' +
    esc(catLabel(w.cat)) +
    "</div><h4>" +
    esc(w.brand) +
    "</h4><p>" +
    esc(w.desc) +
    '</p><span class="arr">View project <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>'
  );
}
function renderWork(cat) {
  var g = el("work-grid");
  if (!g) return;
  var list =
    cat && cat !== "all"
      ? PROJECTS_BIG.filter(function (w) {
          return w.cat === cat;
        })
      : PROJECTS_BIG;
  g.innerHTML = list.map(workCard).join("");
}
function renderWorkTabs() {
  var t = el("work-tabs");
  if (!t) return;
  t.innerHTML = WORK_CATS.map(function (c, i) {
    return (
      '<button class="' +
      (i === 0 ? "on" : "") +
      '" onclick="filterWork(\'' +
      c[0] +
      "',this)\">" +
      esc(c[1]) +
      "</button>"
    );
  }).join("");
}
function filterWork(cat, btn) {
  var t = el("work-tabs");
  if (t) {
    var bs = t.querySelectorAll("button");
    for (var i = 0; i < bs.length; i++) bs[i].classList.remove("on");
  }
  if (btn) btn.classList.add("on");
  renderWork(cat);
}
function renderNetwork() {
  var g = el("net-grid");
  if (!g) return;
  g.innerHTML = NETWORK.map(function (n) {
    return '<div class="net-chip rv">' + esc(n) + "</div>";
  }).join("");
}
function renderValues() {
  var g = el("values-grid");
  if (!g) return;
  g.innerHTML = VALUES4.map(function (v, i) {
    return (
      '<div class="value-card rv' +
      (i % 2 ? " rv-d1" : "") +
      '"><div class="vn">' +
      esc(v.vn) +
      '</div><div class="en">' +
      esc(v.en) +
      "</div><p>" +
      esc(v.p) +
      "</p></div>"
    );
  }).join("");
}
function renderNews() {
  var g = el("news-grid");
  if (!g) return;
  g.innerHTML = NEWS3.map(function (n, i) {
    return (
      '<a class="news-card rv' +
      (" rv-d" + ((i % 3) + 1)) +
      '" href="' +
      esc(n.url) +
      '" target="_blank" rel="noopener"><div class="nimg"><img src="' +
      esc(n.img) +
      '" alt="' +
      esc(n.title) +
      '" loading="lazy" onerror="this.parentNode.style.display=\'none\'"></div><div class="nbody"><div class="nd">' +
      esc(n.date) +
      "</div><h4>" +
      esc(n.title) +
      "</h4></div></a>"
    );
  }).join("");
}
function renderRecognition() {
  var g = el("recog-grid");
  if (!g) return;
  g.innerHTML = RECOG.map(function (r) {
    return (
      '<img class="rv" src="' +
      esc(r) +
      '" alt="OTB recognition" loading="lazy" onerror="this.style.display=\'none\'">'
    );
  }).join("");
}
function renderFeatures() {
  var g = el("feat-grid");
  if (!g) return;
  g.innerHTML = FEATURES.map(function (f, i) {
    return (
      '<div class="feat rv' +
      (" rv-d" + ((i % 3) + 1)) +
      '"><div class="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      f.ic +
      "</svg></div><h4>" +
      esc(f.t) +
      "</h4><p>" +
      esc(f.d) +
      "</p></div>"
    );
  }).join("");
}
function renderPartners() {
  var g = el("partner-row");
  if (!g) return;
  g.innerHTML = PARTNERS.map(function (p) {
    return "<span>" + esc(p) + "</span>";
  }).join("");
}
function setYear() {
  var y = el("yr");
  if (y) y.textContent = new Date().getFullYear();
}
function setHeroImages() {
  var h = el("hero-img");
  if (h && typeof IMG !== "undefined" && IMG.hero) h.src = IMG.hero;
  var a = el("about-img");
  if (a && typeof IMG !== "undefined" && IMG.about) a.src = IMG.about;
}

/* ---------- COUNTERS + REVEAL ---------- */
function runCount(node) {
  var target = parseInt(node.getAttribute("data-count"), 10) || 0,
    suf = node.getAttribute("data-suffix") || "";
  if (node.getAttribute("data-done")) return;
  node.setAttribute("data-done", "1");
  if (RM) {
    node.textContent = target.toLocaleString("en-US") + suf;
    return;
  }
  var start = null,
    dur = 1400;
  function step(ts) {
    if (start === null) start = ts;
    var p = Math.min((ts - start) / dur, 1),
      e = 1 - Math.pow(1 - p, 3);
    node.textContent = Math.floor(e * target).toLocaleString("en-US") + suf;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
function revealIn(scope) {
  if (!scope) return;
  var r = scope.querySelectorAll(".rv");
  for (var i = 0; i < r.length; i++) r[i].classList.add("in");
  var c = scope.querySelectorAll("[data-count]");
  for (var j = 0; j < c.length; j++) runCount(c[j]);
}

/* ---------- ROUTER ---------- */
var navBusy = false;
function _swapPage(page) {
  var target = el("page-" + page) || el("page-home");
  var pages = document.querySelectorAll(".page");
  for (var i = 0; i < pages.length; i++) pages[i].classList.remove("active");
  target.classList.add("active");
  var links = document.querySelectorAll(".nav-a");
  for (var k = 0; k < links.length; k++)
    links[k].classList.toggle(
      "active",
      links[k].getAttribute("data-nav") === page,
    );
  document.body.setAttribute("data-theme", page);
  window.scrollTo({ top: 0, behavior: "auto" });
  revealIn(target);
}
function nav(page, skip) {
  var m = el("mob");
  if (m) m.classList.remove("open");
  var w = el("wipe");
  if (RM || skip || !w) {
    _swapPage(page);
    return;
  }
  if (navBusy) return;
  navBusy = true;
  w.classList.remove("reveal");
  void w.offsetWidth;
  w.classList.add("cover");
  setTimeout(function () {
    _swapPage(page);
    w.classList.remove("cover");
    void w.offsetWidth;
    w.classList.add("reveal");
    setTimeout(function () {
      w.classList.remove("reveal");
      navBusy = false;
    }, 520);
  }, 430);
}
function onScroll() {
  var n = el("nav");
  if (n) n.classList.toggle("scrolled", window.scrollY > 24);
}

/* ---------- CONTACT ---------- */
function sendContact() {
  var n = (el("c-name") || {}).value || "",
    e = (el("c-email") || {}).value || "",
    m = (el("c-msg") || {}).value || "";
  var note = document.querySelector("#page-contact .cnote");
  if (!n.trim() || !e.trim()) {
    if (note) {
      note.textContent = "Please add your name and email.";
      note.style.color = "var(--pink)";
    }
    return;
  }
  if (note) {
    note.textContent = "Sending...";
    note.style.color = "var(--faint)";
  }
  postLead("Website enquiry from " + n, { Name: n, Email: e, Message: m })
    .then(function (r) {
      if (note) {
        note.textContent =
          r.mode === "sent"
            ? "Sent — thank you! We will be in touch shortly."
            : "Opening your email app to send your message...";
        note.style.color = "var(--pink)";
      }
      var mm = el("c-msg");
      if (mm && r.mode === "sent") mm.value = "";
    })
    .catch(function () {
      if (note) {
        note.textContent =
          "Could not send — please email nhansu@otbcreatives.com.";
        note.style.color = "var(--pink)";
      }
    });
}

/* ---------- 3D PRODUCT VIEWER ---------- */
var pv = {
  ready: false,
  renderer: null,
  scene: null,
  cam: null,
  mesh: null,
  raf: null,
  drag: false,
  lx: 0,
  ly: 0,
  rx: 0,
  ry: 0,
  zoom: 5,
};
function makeShape(kind, color) {
  var geo;
  if (kind === "knot") geo = new THREE.TorusKnotGeometry(1, 0.34, 120, 16);
  else if (kind === "ico") geo = new THREE.IcosahedronGeometry(1.5, 0);
  else if (kind === "gift") geo = new THREE.BoxGeometry(2, 2, 2);
  else if (kind === "dodeca") geo = new THREE.DodecahedronGeometry(1.6, 0);
  else geo = new THREE.SphereGeometry(1.5, 48, 48);
  var mat = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.35,
    metalness: 0.25,
  });
  return new THREE.Mesh(geo, mat);
}
var PRODPHOTO = ["gift", "about", "seminar", "hero"];
function makePhotoCard(key) {
  var edge = new THREE.MeshBasicMaterial({ color: 0x0a1f44 });
  var src = typeof IMG !== "undefined" && IMG[key] ? IMG[key] : null;
  if (!src) return new THREE.Mesh(new THREE.BoxGeometry(3, 2, 0.12), edge);
  var tex = new THREE.TextureLoader().load(src);
  var photo = new THREE.MeshBasicMaterial({ map: tex });
  return new THREE.Mesh(new THREE.BoxGeometry(3.1, 2.0, 0.12), [
    edge,
    edge,
    edge,
    edge,
    photo,
    photo,
  ]);
}
function pvSize() {
  if (!pv.renderer) return;
  var s = el("pv-stage");
  var w = s.clientWidth || 400,
    h = s.clientHeight || 340;
  pv.renderer.setSize(w, h);
  pv.cam.aspect = w / h;
  pv.cam.updateProjectionMatrix();
}
function ensurePV() {
  if (pv.ready || typeof THREE === "undefined") return pv.ready;
  var stage = el("pv-stage");
  if (!stage) return false;
  try {
    pv.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    pv.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    stage.appendChild(pv.renderer.domElement);
    pv.scene = new THREE.Scene();
    pv.cam = new THREE.PerspectiveCamera(45, 1.2, 0.1, 100);
    pv.cam.position.z = pv.zoom;
    pv.scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    var d = new THREE.DirectionalLight(0xffffff, 0.9);
    d.position.set(4, 5, 6);
    pv.scene.add(d);
    var p = new THREE.PointLight(0xff5c8a, 0.6);
    p.position.set(-4, -2, 3);
    pv.scene.add(p);
    var c = pv.renderer.domElement;
    c.addEventListener("pointerdown", function (e) {
      pv.drag = true;
      pv.lx = e.clientX;
      pv.ly = e.clientY;
    });
    window.addEventListener("pointerup", function () {
      pv.drag = false;
    });
    window.addEventListener("pointermove", function (e) {
      if (!pv.drag || !pv.mesh) return;
      pv.ry += (e.clientX - pv.lx) * 0.01;
      pv.rx += (e.clientY - pv.ly) * 0.01;
      pv.lx = e.clientX;
      pv.ly = e.clientY;
    });
    c.addEventListener(
      "wheel",
      function (e) {
        e.preventDefault();
        pv.zoom = Math.max(
          3,
          Math.min(9, pv.zoom + (e.deltaY > 0 ? 0.4 : -0.4)),
        );
        pv.cam.position.z = pv.zoom;
      },
      { passive: false },
    );
    pv.ready = true;
  } catch (err) {
    pv.ready = false;
  }
  return pv.ready;
}
function pvLoop() {
  pv.raf = requestAnimationFrame(pvLoop);
  if (!pv.mesh) return;
  if (!pv.drag && !RM) pv.ry += 0.005;
  pv.mesh.rotation.x = pv.rx;
  pv.mesh.rotation.y = pv.ry;
  pv.renderer.render(pv.scene, pv.cam);
}
function openProduct(i) {
  var p = PRODUCTS[i];

  if (!p) return;

  const lang = currentLang || "en";

  el("pv-title").textContent = p.title[lang];

  el("pv-desc").textContent = p.description[lang];

  el("pv-points").innerHTML = (p.points || [])
    .map(function (item) {
      return "<li>" + esc(item[lang]) + "</li>";
    })
    .join("");

  el("pv").classList.add("open");

  if (ensurePV()) {
    if (pv.mesh) pv.scene.remove(pv.mesh);

    pv.mesh = makePhotoCard(PRODPHOTO[i] || "hero");

    pv.rx = 0.12;
    pv.ry = -0.32;
    pv.zoom = 5;
    pv.cam.position.z = 5;

    pv.scene.add(pv.mesh);

    pvSize();

    if (!pv.raf) {
      pvLoop();
    }
  }
}
function closeProduct() {
  el("pv").classList.remove("open");
}

/* ---------- CHAT ---------- */
var chatOpen = false,
  chatBusy = false,
  greeted = false,
  chatHistory = [];
function toggleChat() {
  chatOpen = !chatOpen;
  el("chat").classList.toggle("open", chatOpen);
  if (chatOpen && !greeted) {
    greeted = true;
    greet();
  }
  if (chatOpen)
    setTimeout(function () {
      el("chat-input").focus();
    }, 300);
}
function addMsg(role, text) {
  var b = el("chat-body");
  var d = document.createElement("div");
  d.className = "msg " + (role === "user" ? "me" : "bot");
  d.textContent = text;
  b.appendChild(d);
  b.scrollTop = b.scrollHeight;
  return d;
}
function greet() {
  addMsg(
    "bot",
    "Hi! I'm the OTB Assistant. Ask me about our programs, reach, or how to start a partnership.",
  );
  var b = el("chat-body");
  var w = document.createElement("div");
  w.className = "chips";
  [
    "What does OTB do?",
    "How many mothers do you reach?",
    "How do I start a partnership?",
  ].forEach(function (q) {
    var c = document.createElement("div");
    c.className = "chip-s";
    c.textContent = q;
    c.onclick = function () {
      el("chat-input").value = q;
      chatSend();
    };
    w.appendChild(c);
  });
  b.appendChild(w);
  b.scrollTop = b.scrollHeight;
}
function claudeFetch(payload) {
  return fetch("api/concierge.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then(function (r) {
      if (!r.ok) throw 0;
      return r.json();
    })
    .catch(function () {
      return fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 600,
          system: payload.system,
          messages: payload.messages,
        }),
      }).then(function (r) {
        if (!r.ok) throw 0;
        return r.json();
      });
    });
}
function chatSend() {
  if (chatBusy) return;
  var inp = el("chat-input");
  var q = (inp.value || "").trim();
  if (!q) return;
  var chips = el("chat-body").querySelector(".chips");
  if (chips) chips.remove();
  addMsg("user", q);
  inp.value = "";
  chatHistory.push({ role: "user", content: q });
  chatBusy = true;
  var b = el("chat-body");
  var t = document.createElement("div");
  t.className = "typing";
  t.innerHTML = "<span></span><span></span><span></span>";
  b.appendChild(t);
  b.scrollTop = b.scrollHeight;
  claudeFetch({ system: KB, messages: chatHistory })
    .then(function (data) {
      t.remove();
      var txt = "";
      if (data && data.content)
        for (var i = 0; i < data.content.length; i++) {
          if (data.content[i].type === "text") txt += data.content[i].text;
        }
      if (!txt)
        txt =
          "Thanks for your message! For the fastest reply, call 0947 70 10 10 or email nhansu@otbcreatives.com.";
      addMsg("bot", txt);
      chatHistory.push({ role: "assistant", content: txt });
      chatBusy = false;
    })
    .catch(function () {
      t.remove();
      addMsg(
        "bot",
        "I can't reach the assistant right now. Please call 0947 70 10 10 or email nhansu@otbcreatives.com and our team will help you.",
      );
      chatBusy = false;
    });
}

/* ---------- HERO TILT ---------- */
function heroTilt() {
  var ph = el("hero-photo");
  if (!ph || RM) return;
  var hv = ph.parentElement;
  hv.addEventListener("pointermove", function (e) {
    var r = hv.getBoundingClientRect();
    var px = (e.clientX - r.left) / r.width - 0.5,
      py = (e.clientY - r.top) / r.height - 0.5;
    ph.style.transform =
      "rotateY(" +
      (px * 8).toFixed(2) +
      "deg) rotateX(" +
      (-py * 8).toFixed(2) +
      "deg)";
  });
  hv.addEventListener("pointerleave", function () {
    ph.style.transform = "";
  });
}

var FORM_ENDPOINT = "";
var SPECIALTIES = [
  {
    k: "womens",
    en: "Women's Health",
    vn: "Sản phụ khoa · Hiếm muộn · Thai sản",
  },
  {
    k: "peds",
    en: "Pediatrics",
    vn: "Nhi khoa · Dinh dưỡng nhi · Sơ sinh",
  },
  { k: "derm", en: "Dermatology", vn: "Da liễu · Thẩm mỹ da" },
  { k: "gastro", en: "Gastroenterology", vn: "Tiêu hóa" },
  { k: "cardio", en: "Cardiology", vn: "Tim mạch · Tăng huyết áp" },
  { k: "endo", en: "Endocrinology", vn: "Đái tháo đường · Nội tiết" },
  { k: "ortho", en: "Orthopedics", vn: "Cơ xương khớp" },
  { k: "resp", en: "Respiratory", vn: "Hô hấp" },
  { k: "ent", en: "ENT", vn: "Tai Mũi Họng" },
  { k: "gp", en: "General Practice", vn: "Bác sĩ gia đình · Đa khoa" },
];
var HCP_SERVICES = [
  {
    n: "Doctor Speaker Program",
    d: "Scientific conferences, CME, webinars and product launches — as speaker, moderator or panelist.",
  },
  {
    n: "Event Participation",
    d: "Expert guest appearances, talks, Q&A and workshops at health and mom-and-baby events.",
  },
  {
    n: "Doctor Review & Endorsement",
    d: "Professional product review and medical endorsement that builds brand credibility.",
  },
  {
    n: "Social Media Doctor Influencer",
    d: "Doctor-led posts, videos and reels across Facebook, TikTok, YouTube and Instagram.",
  },
  {
    n: "Facebook Group Activation",
    d: "Education and awareness inside doctor, specialty and parent communities.",
  },
  {
    n: "Livestream & Webinar",
    d: "Live consultations and professional webinars on Facebook, TikTok and Shopee.",
  },
  {
    n: "TVC & Commercial Talent",
    d: "Doctors featured in TV and digital commercials, branding videos and key visuals.",
  },
  {
    n: "Doctor Image Licensing",
    d: "Consent-based use of HCP imagery across POSM, web, social and print.",
  },
  {
    n: "Medical Content Creation",
    d: "Co-created articles, ebooks, guidelines, FAQs, infographics and video scripts.",
  },
  {
    n: "Advisory Board",
    d: "Expert panels and product consultation, before and after launch.",
  },
  {
    n: "Market Research",
    d: "Surveys, interviews and focus groups for concept and message testing with HCPs.",
  },
  {
    n: "Scientific Knowledge & Product-Access Program",
    d: "Compliance-led scientific knowledge updates for HCPs and support for appropriate product access — never payment for prescribing.",
    flag: true,
  },
];
var HCP_GROUPS = [
  "Doctors",
  "Pharmacists",
  "Nurses",
  "Midwives",
  "Nutritionists",
];
var HCP_WHY = [
  {
    t: "Verified HCP Network",
    d: "Every professional's practising credentials are checked.",
  },
  {
    t: "Nationwide Coverage",
    d: "A network spanning hospitals and clinics across Vietnam.",
  },
  {
    t: "End-to-End Management",
    d: "From booking and briefing to delivery and reporting.",
  },
  {
    t: "Compliance-Oriented",
    d: "Engagements structured to meet healthcare-industry rules.",
  },
  {
    t: "One Contact Point",
    d: "A single OTB lead for your entire campaign.",
  },
];
var HCP_ROSTER = [
  {
    spec: "womens",
    title: "Senior OB-GYN Consultant",
    region: "Ho Chi Minh City",
    years: 14,
    langs: "VN · EN",
    fmts: ["Speaker", "Advisory", "Livestream"],
  },
  {
    spec: "peds",
    title: "Pediatric & Neonatal Specialist",
    region: "Nationwide",
    years: 12,
    langs: "VN · EN",
    fmts: ["Speaker", "Event", "Content"],
  },
  {
    spec: "peds",
    title: "Pediatric Nutrition Expert",
    region: "Hà Nội",
    years: 10,
    langs: "VN",
    fmts: ["Webinar", "Content", "Advisory"],
  },
  {
    spec: "derm",
    title: "Dermatology Consultant",
    region: "Ho Chi Minh City",
    years: 11,
    langs: "VN · EN",
    fmts: ["Review", "Social", "TVC"],
  },
  {
    spec: "cardio",
    title: "Cardiology Specialist",
    region: "Đà Nẵng",
    years: 15,
    langs: "VN",
    fmts: ["Speaker", "Advisory"],
  },
  {
    spec: "endo",
    title: "Endocrinology & Diabetes Expert",
    region: "Nationwide",
    years: 13,
    langs: "VN · EN",
    fmts: ["Webinar", "Advisory", "Research"],
  },
  {
    spec: "gastro",
    title: "Gastroenterology Consultant",
    region: "Ho Chi Minh City",
    years: 9,
    langs: "VN",
    fmts: ["Speaker", "Content"],
  },
  {
    spec: "resp",
    title: "Respiratory Specialist",
    region: "Hà Nội",
    years: 12,
    langs: "VN",
    fmts: ["Webinar", "Event"],
  },
  {
    spec: "ent",
    title: "ENT Consultant",
    region: "Ho Chi Minh City",
    years: 10,
    langs: "VN",
    fmts: ["Review", "Event"],
  },
  {
    spec: "gp",
    title: "Family Medicine Doctor",
    region: "Nationwide",
    years: 8,
    langs: "VN · EN",
    fmts: ["Social", "Livestream", "Content"],
  },
  {
    spec: "gp",
    title: "Clinical Pharmacist",
    region: "Ho Chi Minh City",
    years: 11,
    langs: "VN",
    fmts: ["Content", "Advisory"],
  },
  {
    spec: "endo",
    title: "Registered Dietitian",
    region: "Nationwide",
    years: 9,
    langs: "VN · EN",
    fmts: ["Webinar", "Social", "Content"],
  },
];
var BK_FORM_HTML = "";

function specLabel(k) {
  for (var i = 0; i < SPECIALTIES.length; i++) {
    if (SPECIALTIES[i].k === k) return SPECIALTIES[i].en;
  }
  return k;
}
function renderHCP() {
  var g = el("hcp-groups");
  if (g)
    g.innerHTML = HCP_GROUPS.map(function (x) {
      return (
        '<div class="hcp-group rv"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>' +
        esc(x) +
        "</div>"
      );
    }).join("");
  var s = el("hcp-svc-grid");
  if (s)
    s.innerHTML = HCP_SERVICES.map(function (x, i) {
      var nn = i + 1 < 10 ? "0" + (i + 1) : i + 1;
      return (
        '<div class="hcp-svc rv' +
        (x.flag ? " flag" : "") +
        '" onclick="openBooking(\'\')"><div class="num">' +
        nn +
        "</div><h4>" +
        esc(x.n) +
        "</h4><p>" +
        esc(x.d) +
        "</p></div>"
      );
    }).join("");
  var w = el("hcp-why");
  if (w)
    w.innerHTML = HCP_WHY.map(function (x) {
      return (
        '<div class="hcp-w rv"><div class="wi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg></div><h4>' +
        esc(x.t) +
        "</h4><p>" +
        esc(x.d) +
        "</p></div>"
      );
    }).join("");
  renderSpecTags();
  renderRoster("all");
}
function renderSpecTags() {
  var t = el("spec-tags");
  if (!t) return;
  var tags =
    '<button class="on" onclick="filterHCP(\'all\',this)">All specialties</button>';
  tags += SPECIALTIES.map(function (s) {
    return (
      "<button onclick=\"filterHCP('" +
      s.k +
      "',this)\">" +
      esc(s.en) +
      "</button>"
    );
  }).join("");
  t.innerHTML = tags;
}
function rosterCard(d) {
  var fmts = (d.fmts || [])
    .map(function (f) {
      return "<em>" + esc(f) + "</em>";
    })
    .join("");
  return (
    '<div class="hcp-card rv"><div class="hcp-av"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5"/><path d="M12 21s-6-4.35-8.5-8"/></svg><span class="vbadge"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span></div>' +
    "<h4>" +
    esc(d.title) +
    '</h4><div class="sp">' +
    esc(specLabel(d.spec)) +
    "</div>" +
    '<div class="hcp-meta"><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
    esc(d.region) +
    "</span>" +
    '<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>' +
    d.years +
    "+ years experience</span>" +
    '<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/><circle cx="12" cy="12" r="10"/></svg>' +
    esc(d.langs) +
    "</span></div>" +
    '<div class="hcp-fmts">' +
    fmts +
    "</div>" +
    '<button class="btn btn-out" onclick="openBooking(\'' +
    d.spec +
    "')\">Request booking</button></div>"
  );
}
function renderRoster(k) {
  var g = el("hcp-roster");
  if (!g) return;
  var list =
    k && k !== "all"
      ? HCP_ROSTER.filter(function (d) {
          return d.spec === k;
        })
      : HCP_ROSTER;
  g.innerHTML = list.length
    ? list.map(rosterCard).join("")
    : '<p style="grid-column:1/-1;text-align:center;color:var(--muted)">No profiles listed for this specialty yet — <a style="color:var(--pink);cursor:pointer" onclick="openBooking(\'' +
      esc(k) +
      "')\">request one</a> and we'll match you.</p>";
  var r = g.querySelectorAll(".rv");
  for (var i = 0; i < r.length; i++) r[i].classList.add("in");
}
function filterHCP(k, btn) {
  var t = el("spec-tags");
  if (t) {
    var b = t.querySelectorAll("button");
    for (var i = 0; i < b.length; i++) b[i].classList.remove("on");
  }
  if (btn) btn.classList.add("on");
  renderRoster(k);
}

/* ---- booking ---- */
function openBooking(spec) {
  if (BK_FORM_HTML && el("bk-body")) el("bk-body").innerHTML = BK_FORM_HTML;
  var ss = el("bk-service");
  if (ss)
    ss.innerHTML = HCP_SERVICES.map(function (s) {
      return "<option>" + esc(s.n) + "</option>";
    }).join("");
  var sp = el("bk-spec");
  if (sp) {
    sp.innerHTML =
      '<option value="">Any specialty</option>' +
      SPECIALTIES.map(function (s) {
        return '<option value="' + s.k + '">' + esc(s.en) + "</option>";
      }).join("");
    if (spec) sp.value = spec;
  }
  var d = el("bk-date");
  if (d) {
    try {
      d.min = new Date().toISOString().slice(0, 10);
    } catch (e) {}
  }
  el("bk").classList.add("open");
}
function closeBooking() {
  el("bk").classList.remove("open");
}
function postLead(subject, data) {
  if (FORM_ENDPOINT) {
    return fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.assign({ _subject: subject }, data)),
    }).then(function (r) {
      if (!r.ok) throw 0;
      return { mode: "sent" };
    });
  }
  var body = Object.keys(data)
    .map(function (k) {
      return k + ": " + (data[k] || "-");
    })
    .join("\r\n");
  window.location.href =
    "mailto:nhansu@otbcreatives.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  return Promise.resolve({ mode: "mailto" });
}
function submitBooking() {
  if ((el("bk-hp") || {}).value) {
    closeBooking();
    return;
  }
  var name = (el("bk-name") || {}).value || "",
    co = (el("bk-co") || {}).value || "",
    email = (el("bk-email") || {}).value || "";
  var note = el("bk-note");
  if (!name.trim() || !co.trim() || !email.trim()) {
    if (note) {
      note.textContent = "Please fill in your name, company and email.";
      note.style.color = "var(--pink)";
    }
    return;
  }
  var data = {
    Name: name,
    Company: co,
    Email: email,
    Phone: (el("bk-phone") || {}).value,
    Industry: (el("bk-industry") || {}).value,
    Service: (el("bk-service") || {}).value,
    Specialty: (el("bk-spec") || {}).options
      ? el("bk-spec").options[el("bk-spec").selectedIndex].text
      : "",
    PreferredDate: (el("bk-date") || {}).value,
    Format: (el("bk-format") || {}).value,
    Budget: (el("bk-budget") || {}).value,
    Needs: (el("bk-msg") || {}).value,
  };
  if (note) {
    note.textContent = "Sending...";
    note.style.color = "var(--faint)";
  }
  postLead("HCP booking request — " + co, data)
    .then(function (r) {
      var b = el("bk-body");
      if (b)
        b.innerHTML =
          '<div class="bk-success"><div class="bk-tick">&#10003;</div><h3>Request received</h3><p>' +
          (r.mode === "sent"
            ? "Thank you — our team will reply within one business day."
            : "Your email app is opening with the request filled in. Send it and we'll reply within one business day.") +
          '</p><button class="btn btn-pri" onclick="closeBooking()">Done</button></div>';
    })
    .catch(function () {
      if (note) {
        note.textContent =
          "Could not send right now — please email nhansu@otbcreatives.com.";
        note.style.color = "var(--pink)";
      }
    });
}

/* ---------- INIT ---------- */
function init() {
  try {
    renderProducts();

    renderServices();
    renderJourney();
    renderWorkTabs();
    renderWork("all");
    renderNetwork();
    renderValues();
    renderNews();
    renderRecognition();
    renderFeatures();
    renderPartners();
    setYear();
    setHeroImages();
    heroTilt();
    renderHCP();
    var _bf = el("bk-body");
    if (_bf) BK_FORM_HTML = _bf.innerHTML;
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeProduct();
    });
    window.addEventListener("resize", pvSize);
    onScroll();
    nav("home", true);
  } catch (err) {
    console.error("init", err);
  }
}
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", init);
else init();
