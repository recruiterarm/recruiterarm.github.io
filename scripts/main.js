// -------------------------------------
// vue app
// -------------------------------------
const app = Vue.createApp({
	data() {
		return {
			// the date my career started (change to yours)
			careerStartDate: 2018,

			// the date copyright started (change to yours)
			copyrightStartDate: 2021,

			// for the template theme
			appTheme: "light_theme",
			savedTheme: null,

			// flag to toggle the preloader
			isPreloading: true,

			// toast notifications array
			notifications: [],

			// manage loading spinner status
			ajaxLoading: [],

			// for minimizing the header on scrolling down
			startMinimizingHeaderAt: 100,
			isHeaderBig: true,
			// for toggling the header on scrolling down
			lastScrollPosition: 0,
			isHeaderHidden: false,
			// for scroll to top button
			startShowingScrollTopBtnAt: 600,
			isScrollTopBtnDisplayed: false,

			// flag to toggle focus style class
			isAnyFocus: false,

			// flag to toggle nav menu
			isNavMenuOpen: false,

			// list of nav links to loop through it
			navLinks: [
				{
					url: "#hero",
					title: { en: "Home", ar: "الرئيسية" },
				},
				{
					url: "#about",
					title: { en: "About", ar: "من أنا" },
				},
				{
					url: "#skills",
					title: { en: "Skills", ar: "مهاراتي" },
				},
				{
					url: "#portfolio",
					title: { en: "Portfolio", ar: "أعمالي" },
				},
				{
					url: "#contact",
					title: { en: "Contact", ar: "اتصل بي" },
				},
			],

			// flag to toggle between skills types in skills section
			skillsType: "",

			// list of skills items to loop through it
			skillsItems: [
				{
					imgUrl: "assets/images/skills/laravel.png",
					title: "Laravel",
				},
				{
					imgUrl: "assets/images/skills/nestjs.svg",
					title: "Nest.js",
				},
				{
					imgUrl: "assets/images/skills/vue.png",
					title: "Vue.js",
				},

				{
					imgUrl: "assets/images/skills/nuxtjs.png",
					title: "Nuxt.Js",
				},
				{
					imgUrl: "assets/images/skills/reactjs.png",
					title: "React.js",
				},
				{
					imgUrl: "assets/images/skills/javascript.png",
					title: "Javascript",
				},

				{
					imgUrl: "assets/images/skills/typescript.png",
					title: "TypeScript",
				},
				{
					imgUrl: "assets/images/skills/graphql.png",
					title: "GraphQl",
				},
				{
					imgUrl: "assets/images/skills/nodejs.png",
					title: "Node.Js",
				},

				{
					imgUrl: "assets/images/skills/firebase.png",
					title: "Firebase",
				},
				{
					imgUrl: "assets/images/skills/nextjs.png",
					darkUrl: "assets/images/skills/nextjs-dark.png",
					title: "Next.Js",
				},
				{
					imgUrl: "assets/images/skills/flutter.png",
					title: "Flutter",
				},
				{
					imgUrl: "assets/images/skills/jwt.svg",
					title: "JWT",
				},
				{
					imgUrl: "assets/images/skills/sass.png",
					title: "Sass",
				},
			],

			// list of tools items to loop through it
			toolsItems: [
				{
					imgUrl: "assets/images/skills/jenkins.png",
					title: "Jenkins",
				},
				{
					imgUrl: "assets/images/skills/git.png",
					title: "Git (Github)",
				},
				{
					imgUrl: "assets/images/skills/circleci.png",
					darkUrl: "assets/images/skills/circleci-dark.png",
					title: "CircleCi",
				},

				{
					imgUrl: "assets/images/skills/apache.png",
					title: "Apache",
				},

				{
					imgUrl: "assets/images/skills/nginx.png",
					title: "Ngnix",
				},
				{
					imgUrl: "assets/images/skills/docker.png",
					title: "Docker",
				},
				{
					imgUrl: "assets/images/skills/do.png",
					title: "Digital Ocean",
				},
				{
					imgUrl: "assets/images/skills/aws.png",
					title: "AWS",
				},
				{
					imgUrl: "assets/images/skills/linux.png",
					title: "Linux",
				},
				{
					imgUrl: "assets/images/skills/jira.png",
					title: "Jira",
				},
				{
					imgUrl: "assets/images/skills/trello.png",
					title: "Trello",
				},
				{
					imgUrl: "assets/images/skills/clickup.png",
					title: "ClickUp",
				},
			],

			// list of experience items to loop through it
			experienceItems: [
				{
					date: "2017",
					companyName: { en: "Ranglerz Digital Marketing", ar: "شركة انفاتو" },
					jobTitle: { en: "Laravel & Vue.js Developer", ar: "مطور UI/UX" },
					desc: {
						en: "Supported senior software developers with development, maintenance, and continuous improvement for enterprise-level web applications and existing systems",
						ar: "تم تحويل تخطيطات Photoshop إلى صفحات ويب باستخدام HTML و CSS و JavaScript.",
					},
				},
				{
					date: "2018",
					companyName: { en: "Programmers Force", ar: "شركة فيسبوك" },
					jobTitle: {
						en: "Full Stack Developer",
						ar: "مطوّر الويب المتكامل",
					},
					desc: {
						en: "Provide maintenance and development for existing projects by assisting with system testing and validation procedures to ensure accurate and on-tim deployment",
						ar: "تعاونت مع الفرق الإبداعية في تطوير وتنفيذ أفكار مبتكرة.",
					},
				},
				{
					date: "2020",
					companyName: { en: "Group Rhinos", ar: "شركة جوجل" },
					jobTitle: {
						en: "Full Stack Developer",
						ar: "مطور الواجهة الأمامية",
					},
					desc: {
						en: "Aggregated proficient understanding of full software development lifecycle, front/back-end development best practices, and agile methodologies to write sustainable code for user-side applications, including visual elements and overall layout of websites and mobile applications.",
						ar: "مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.",
					},
				},



			],

			// current page of portfolio items
			portfolioItemsPage: 1,

			// portfolio items per page
			itemsPerPage: 7,

			// portfolio items filter by type
			filters: [
				"All",
				"Laravel",
				"Vue.js",
				"React.js",
				"Nuxt.js",
				"Next.js",
				"Nest.js",
				"Node.js",

			],
			currentFilter: "All",

			// portfolio archive name
			portfolioArchiveName: "",

			// list of portfolio items to loop through it
			allPortfolioItems: [
				{
					id: 1,
					url: "single-portfolio.html?id=1",
					imgUrl: "assets/images/portfolio/opflafil/op-flafal-1.png",
					title: {
						en: "Operation Falafel",
						ar: "عملية فلافل",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["React.js", "Node.js", "Nest.js"],
					tools: [
						"HTML",
						"PugJS",
						"SCSS",
						"React.js",
						"Postgres",
						"Docker",
						"Nginx",
						"Node.js",
					],
					screenshots: {
						img1: {
							url: "assets/images/portfolio/opflafil/op-flafal-2.png",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img2: {
							url: "assets/images/portfolio/opflafil/op-flafal-4.png",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img3: {
							url: "assets/images/portfolio/opflafil/op-flafal-5.png",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img4: {
							url: "assets/images/portfolio/opflafil/op-flafal-6.png",
							caption: { en: "caption 6", ar: "تسمية توضيحية 6" },
						},
						img5: {
							url: "assets/images/portfolio/opflafil/op-flafal-7.png",
							caption: { en: "caption 7", ar: "تسمية توضيحية 7" },
						},
						img5: {
							url: "assets/images/portfolio/opflafil/op-flafal-8.png",
							caption: { en: "caption 8", ar: "تسمية توضيحية 8" },
						},
					},
				},

				{
					id: 5,
					url: "single-portfolio.html?id=5",
					imgUrl: "assets/images/portfolio/spendlly/spendlly-2.png",
					title: {
						en: "Spendlly",
						ar: "أنفق",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Vue.js", "Node.js"],
					tools: [
						"HTML",
						"PugJS",
						"Docker",
						"CicleCi",
						"Nginx",
						"SCSS",
						"JavaScript",
						"Bootstrap",
						"Node.js",
						"Vue.js",
						"Firebase",
					],
					screenshots: {
						img1: {
							url: "assets/images/portfolio/spendlly/spendlly-1.png",
							caption: { en: "caption 1", ar: "تسمية توضيحية 1" },
						},
						img2: {
							url: "assets/images/portfolio/spendlly/spendlly-3.png",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img3: {
							url: "assets/images/portfolio/spendlly/spendlly-4.png",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img4: {
							url: "assets/images/portfolio/spendlly/spendlly-5.png",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img5: {
							url: "assets/images/portfolio/spendlly/spendlly-6.png",
							caption: { en: "caption 6", ar: "تسمية توضيحية 6" },
						},
						img5: {
							url: "assets/images/portfolio/spendlly/spendlly-7.png",
							caption: { en: "caption 7", ar: "تسمية توضيحية 7" },
						},
						img5: {
							url: "assets/images/portfolio/spendlly/spendlly-8.png",
							caption: { en: "caption 8", ar: "تسمية توضيحية 8" },
						},
						img5: {
							url: "assets/images/portfolio/spendlly/spendlly-9.png",
							caption: { en: "caption 9", ar: "تسمية توضيحية 9" },
						},
					},
				},
				{
					id: 6,
					url: "single-portfolio.html?id=6",
					imgUrl: "assets/images/portfolio/miuz/miuz-1.png",
					title: {
						en: "Miuz",
						ar: "هنا عنوان المشروع 6",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Vue.js", "Laravel", "Node.js"],
					tools: [
						"HTML",
						"Slim",
						"CSS",
						"Less",
						"JavaScript",
						"TypeScript",
						"Materialize",
						"AJAX",
						"Angular",
						"NodeJs",
						"MongoDB",
					],
					screenshots: {
						img1: {
							url: "assets/images/portfolio/miuz/miuz-2.png",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img2: {
							url: "assets/images/portfolio/miuz/miuz-3.png",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img3: {
							url: "assets/images/portfolio/miuz/miuz-4.png",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img4: {
							url: "assets/images/portfolio/miuz/miuz-5.png",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img5: {
							url: "assets/images/portfolio/miuz/miuz-7.png",
							caption: { en: "caption 1", ar: "تسمية توضيحية 1" },
						},
					},
				},
				{
					id: 7,
					url: "single-portfolio.html?id=7",
					imgUrl: "assets/images/portfolio/seha/seha-1.png",
					title: {
						en: "Seha",
						ar: "صحة",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Laravel", "Vue.js"],
					tools: [
						"Laravel",
						"Vue.js",
						"CSS",
						"SCSS",
						"JavaScript",
						"Bootstrap",
						"AJAX",
						"MySql",
					],
					screenshots: {
						img1: {
							url: "assets/images/portfolio/seha/seha-2.png",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},

					},
				},
				{
					id: 8,
					url: "single-portfolio.html?id=8",
					imgUrl: "assets/images/portfolio/gme/gme-1.png",
					title: {
						en: "Gulf Middle East",
						ar: "هنا عنوان المشروع 8",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Vue.js", "Laravelf"],
					tools: [
						"HTML",
						"Slim",
						"CSS",
						"Less",
						"JavaScript",
						"TypeScript",
						"TailwindCSS",
						"AJAX",
						"Angular",
						"NodeJs",
						"MongoDB",
					],
					screenshots: {
						img1: {
							url: "https://via.placeholder.com/355x200",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img2: {
							url: "https://via.placeholder.com/330x460",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img3: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img4: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img5: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 1", ar: "تسمية توضيحية 1" },
						},
					},
				},

				{
					id: 11,
					url: "single-portfolio.html?id=11",
					imgUrl: "assets/images/portfolio/cobuilder/cobuilder-1.png",
					title: {
						en: "CoBuilder",
						ar: "هنا عنوان المشروع 11",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Vue.js", "Nest.js", "Postgres", "Jenkins"],
					tools: [
						"Node.js",
						"Vue.js",
						"CSS",
						"SCSS",
						"JavaScript",
						"TailwindCSS",
						"Jenkins",
						"Postgres",
						"Nest.js",

					],
					screenshots: {
						img1: {
							url: "assets/images/portfolio/cobuilder/cobuilder-2.png",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img2: {
							url: "assets/images/portfolio/cobuilder/cobuilder-3.png",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img3: {
							url: "assets/images/portfolio/cobuilder/cobuilder-4.png",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img4: {
							url: "assets/images/portfolio/cobuilder/cobuilder-5.png",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img5: {
							url: "assets/images/portfolio/cobuilder/cobuilder-6.png",
							caption: { en: "caption 6", ar: "تسمية توضيحية 6" },
						},
						img5: {
							url: "assets/images/portfolio/cobuilder/cobuilder-7.png",
							caption: { en: "caption 7", ar: "تسمية توضيحية 7" },
						},
						img5: {
							url: "assets/images/portfolio/cobuilder/cobuilder-8.png",
							caption: { en: "caption 8", ar: "تسمية توضيحية 8" },
						},
					},
				},
				{
					id: 12,
					url: "single-portfolio.html?id=12",
					imgUrl: "assets/images/portfolio/lepetitshop/lepetitshop-1.png",
					title: {
						en: "LepetitShop",
						ar: "هنا عنوان المشروع 12",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Laravel", "Vue.js"],
					tools: [
						"HTML",
						"Slim",
						"CSS",
						"Less",
						"JavaScript",
						"TypeScript",
						"Materialize",
						"AJAX",
						"Vue",
						"NodeJs",
						"MongoDB",
					],
					screenshots: {
						img1: {
							url: "https://via.placeholder.com/355x200",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img2: {
							url: "https://via.placeholder.com/330x460",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img3: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img4: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img5: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 1", ar: "تسمية توضيحية 1" },
						},
					},
				},
				{
					id: 13,
					url: "single-portfolio.html?id=13",
					imgUrl: "assets/images/portfolio/baroque/baroque-aviation-1.png",
					title: {
						en: "Baroque Aviation",
						ar: "طيران الباروك",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Laravel", "Vue.js", "Node.js", "Nest.js"],
					tools: [
						"Laravel",
						"CSS",
						"SCSS",
						"JavaScript",
						"Gulp",
						"TailwindCSS",
						"JWT",
						"Angular",
						"MySql",
					],
					screenshots: {
						img1: {
							url: "assets/images/portfolio/baroque/baroque-aviation-2.png",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img2: {
							url: "assets/images/portfolio/baroque/baroque-aviation-3.png",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img3: {
							url: "assets/images/portfolio/baroque/baroque-aviation-4.png",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img4: {
							url: "assets/images/portfolio/baroque/baroque-aviation-5.png",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img5: {
							url: "assets/images/portfolio/baroque/baroque-aviation-6.png",
							caption: { en: "caption 6", ar: "تسمية توضيحية 6" },
						},
					},
				},
				{
					id: 14,
					url: "single-portfolio.html?id=14",
					imgUrl: "assets/images/portfolio/medicall/medicall-1.png",
					title: {
						en: "Medicall",
						ar: "هنا عنوان المشروع 14",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Laravel", "Vue.js"],
					tools: [
						"HTML",
						"Slim",
						"CSS",
						"Less",
						"JavaScript",
						"TypeScript",
						"Bootstrap",
						"AJAX",
						"Vue",
						"NodeJs",
						"MongoDB",
					],
					screenshots: {
						img1: {
							url: "https://via.placeholder.com/355x200",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img2: {
							url: "https://via.placeholder.com/330x460",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img3: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img4: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img5: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 1", ar: "تسمية توضيحية 1" },
						},
					},
				},
				{
					id: 15,
					url: "single-portfolio.html?id=15",
					imgUrl: "assets/images/portfolio/gotrip/gotrip-1.png",
					title: {
						en: "GoTrip",
						ar: "هنا عنوان المشروع 15",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Vue.js", "Laravel"],
					tools: [
						"HTML",
						"PugJS",
						"CSS",
						"SCSS",
						"JavaScript",
						"Gulp",
						"Materialize",
						"AJAX",
						"Angular",
						"Firebase",
					],
					screenshots: {
						img1: {
							url: "https://via.placeholder.com/355x200",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img2: {
							url: "https://via.placeholder.com/330x460",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img3: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img4: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img5: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 1", ar: "تسمية توضيحية 1" },
						},
					},
				},
				{
					id: 16,
					url: "single-portfolio.html?id=16",
					imgUrl: "assets/images/portfolio/dubainights/dubainights-1.png",
					title: {
						en: "Dubai Nights",
						ar: "ليالي دبي",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Next.js", "Graphql", "Nest.js", "React.js"],
					tools: [
						"HTML",
						"JavaScript",
						"TypeScript",
						"Graphql",
						"React.js",
						"Nest.js",
						"Postgres",
						"CSS",
						"SaSS",
						"Docker",
						"Nginx"

					],
					screenshots: {
						img1: {
							url: "assets/images/portfolio/dubainights/dubainights-2.png",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img2: {
							url: "assets/images/portfolio/dubainights/dubainights-3.png",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img3: {
							url: "assets/images/portfolio/dubainights/dubainights-4.png",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img4: {
							url: "assets/images/portfolio/dubainights/dubainights-5.png",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img5: {
							url: "assets/images/portfolio/dubainights/dubainights-6.png",
							caption: { en: "caption 6", ar: "تسمية توضيحية 6" },
						},
						img5: {
							url: "assets/images/portfolio/dubainights/dubainights-7.png",
							caption: { en: "caption 7", ar: "تسمية توضيحية 7" },
						},
					},
				},
				{
					id: 17,
					url: "single-portfolio.html?id=17",
					imgUrl: "assets/images/portfolio/baroque/baroque-yatch-1.png",
					title: {
						en: "Baroque Yatchs",
						ar: "يخوت الباروك",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Laravel", "Vue.js"],
					tools: [
						"Laravel",
						"Apache",
						"CSS",
						"SCSS",
						"JavaScript",
						"Gulp",
						"TailwindCSS",
						"MySql",
					],
					screenshots: {
						img2: {
							url: "assets/images/portfolio/baroque/baroque-yatch-2.png",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img3: {
							url: "assets/images/portfolio/baroque/baroque-yatch-3.png",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img4: {
							url: "assets/images/portfolio/baroque/baroque-yatch-4.png",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img5: {
							url: "assets/images/portfolio/baroque/baroque-yatch-5.png",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
					},
				},
				{
					id: 18,
					url: "single-portfolio.html?id=18",
					imgUrl: "assets/images/portfolio/ramp/ramp-1.png",
					title: {
						en: "Ramp",
						ar: "هنا عنوان المشروع 18",
					},
					date: { en: "April 2021", ar: "أبريل 2021" },
					desc: {
						en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
					},
					category: ["Vue.js", "Laravel", "Node.js"],
					tools: [
						"HTML",
						"Slim",
						"CSS",
						"Less",
						"JavaScript",
						"TypeScript",
						"Materialize",
						"AJAX",
						"Vue",
						"NodeJs",
						"MongoDB",
					],
					screenshots: {
						img1: {
							url: "https://via.placeholder.com/355x200",
							caption: { en: "caption 5", ar: "تسمية توضيحية 5" },
						},
						img2: {
							url: "https://via.placeholder.com/330x460",
							caption: { en: "caption 4", ar: "تسمية توضيحية 4" },
						},
						img3: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 3", ar: "تسمية توضيحية 3" },
						},
						img4: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 2", ar: "تسمية توضيحية 2" },
						},
						img5: {
							url: "https://via.placeholder.com/300x225",
							caption: { en: "caption 1", ar: "تسمية توضيحية 1" },
						},
					},
				},
			].reverse(),

			// viewed portfolio items
			portfolioItems: [],

			// list of testimonials items to loop through it
			testimonialsItems: [
				{
					imgUrl: "assets/images/testimonials/anonymous-user.png",
					quoteContent: {
						en: "Abu Baker is smart and intelligent guy who has immense knowledge of laravel 5.8 , bootsrap 4.0.0, php, css3, html5 SASS, Jquery, Javascript and other website technique that make him different as compare to other developer. He coding techniques and neatness are perfect and very easy to understand and execute. Initially i thought he was like very slow but the best part was he make you write all what u want on the project and design it in one shot. I recommend him to all employers on freelancer :)",
						ar: "محمد يقدم خدمات مذهلة في تطوير الويب، ولديه فريق محترف يجعل التعامل معهم مطمئن للغاية. أوصي بفريقهم للجميع.",
					},
					quoteAuthor: { en: "Aladeen", ar: "جابر العواني" },
					jobTitle: { en: "entrepreneur", ar: "مصور فوتوغرافي" },
				},
				{
					imgUrl: "assets/images/testimonials/person-5.jpg",
					quoteContent: {
						en: "Abu understood our requirements and was able complete the job quickly.",
						ar: "فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.",
					},
					quoteAuthor: { en: "Lonny Corkery", ar: "حسون القلال" },
					jobTitle: { en: "Project Manager", ar: "مدير المشاريع" },
				},
				{
					imgUrl: "assets/images/testimonials/person-1.jpg",
					quoteContent: {
						en: "Very professional. Knows his work. Delivers on time. Highly recommended.",
						ar: "محمد مطور محترف للغاية يقدم دائمًا نتائج عالية الجودة ، وهو دائمًا موجود للمساعدة. نتطلع إلى العمل معه في مشاريع أخرى.",
					},
					quoteAuthor: { en: "Max Schmidt DDS", ar: "مصطفى الخليفي" },
					jobTitle: { en: "CEO, Designer", ar: "أخصائي SEO" },
				},
				{
					imgUrl: "assets/images/testimonials/funny.jpg",
					quoteContent: {
						en: "Abu was able to understand the requirements of our task, and engage with our team. I hope we can work together again someday",
						ar: "عمل محمد في عدد كبير من المشاريع لأجلنا وكان دائمًا يفوق توقعاتنا. مطور متخصص وموهوب ونسعد دائمًا بالعمل معه.",
					},
					quoteAuthor: { en: "Amir Stoltenberg", ar: "عباس العنابي" },
					jobTitle: { en: "Sales Manager", ar: "مدير مبيعات" },
				},
				{
					imgUrl: "assets/images/testimonials/lior.png",
					quoteContent: {
						en: "Abu Bakar is extremely professional, talented, and experienced. Always available and very communicative. Working with him is very recommended for anyone who wants to trust their freelancers with closed eyes. I really enjoyed working with Abu Bakar, and can't wait for our next project together.",
						ar: "يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.",
					},
					quoteAuthor: { en: "Lior Lindvor", ar: "سمير النجار" },
					jobTitle: { en: "CEO Cyberfuze Ventures", ar: "آرت دايركتور" },
				},

				{
					imgUrl: "assets/images/testimonials/Deniss-Levskoi.jpeg",
					quoteContent: {
						en: "I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!",
						ar: "يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.",
					},
					quoteAuthor: { en: "Pasquale Deckow", ar: "عطا بن عاشور" },
					jobTitle: { en: "Art Director", ar: "آرت دايركتور" },
				},
				{
					imgUrl: "assets/images/testimonials/person-2.jpg",
					quoteContent: {
						en: "Excellent Team to work with. Always positive to find the most appropriate solution",
						ar: "فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.",
					},
					quoteAuthor: { en: "Javon Bogan", ar: "صهيب الشريف" },
					jobTitle: { en: "Project Manager", ar: "مدير المشاريع" },
				},
				{
					imgUrl: "assets/images/testimonials/anonymous-user.png",
					quoteContent: {
						en: "Abu is very professional, always delivers high quality results, and is always there to help. Look forward to working with Abu in other projects.",
						ar: "محمد مطور محترف للغاية يقدم دائمًا نتائج عالية الجودة ، وهو دائمًا موجود للمساعدة. نتطلع إلى العمل معه في مشاريع أخرى.",
					},
					quoteAuthor: { en: "Duncan Kemmer", ar: "سيد كرم" },
					jobTitle: { en: "CEO, Designer", ar: "أخصائي SEO" },
				},


			],
		};
	},
	created() {
		// get a theme to use
		this.getAppTheme();
	},
	mounted() {
		if (window.innerWidth >= 992) {
			// initialize circle cursor
			this.initCircleCursor();

			// apply pan effect hero image
			this.heroImgPanEffect();

			// initialize VanillaTilt library in portfolio section
			this.initializeTilt();
		}

		// nav menu tab trap
		this.navMenuTabTrap();

		// hide the preloader screen after loading
		window.addEventListener("load", () => (this.isPreloading = false));

		// scrolling options
		this.scrollingOptions();
		document.addEventListener("scroll", () => this.scrollingOptions());

		// initialize popper.js plugin
		document.querySelectorAll(".has-ultimate-tooltip").forEach((el) => {
			Popper.createPopper(el, el.querySelector(".ultimate-tooltip"), {
				placement: "top",
				modifiers: [{ name: "offset", options: { offset: [0, 30] } }],
			});
		});

		// get portfolio items
		this.getPortfolioItems();

		// init glightbox plugin
		const lightbox = new GLightbox({
			autoplayVideos: false,
		});

		// initialize the first displayed type of skills
		this.initSkillsFirstType();
	},
	methods: {
		// initialize circle cursor
		initCircleCursor() {
			const app = this.$refs.appRef;
			const outer = this.$refs.circleCursorOuter;
			const inner = this.$refs.circleCursorInner;

			// return if disabled
			if (!outer || !inner) {
				return;
			}

			app.addEventListener("mousemove", (e) => {
				// make the circles follow the cursor
				outer.setAttribute(
					"style",
					`visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`
				);
				inner.setAttribute(
					"style",
					`visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`
				);

				// add link hover style
				e.target.closest("a") ||
					e.target.closest("button") ||
					e.target.closest(".link-hover")
					? inner.classList.add("cursor-link-hover")
					: inner.classList.remove("cursor-link-hover");
			});

			app.addEventListener("click", () => {
				// add pulse effect on click
				inner.classList.add("cursor-click-effect");
				setTimeout(
					() => inner.classList.remove("cursor-click-effect"),
					200
				);
			});
		},

		// get a theme to use
		getAppTheme() {
			// get the saved theme from the localStorage
			const storageSavedTheme = localStorage.getItem("nafieSavedTheme");

			// Check to see if there a saved theme
			if (storageSavedTheme) {
				this.savedTheme = storageSavedTheme;
			} else {
				// So, try to get the browser default theme or make your own default

				// Check to see if Media-Queries are supported
				if (window.matchMedia) {
					// Check if the dark-mode Media-Query matches
					if (
						window.matchMedia("(prefers-color-scheme: dark)")
							.matches
					) {
						this.savedTheme = "dark_theme";
					} else {
						this.savedTheme = "light_theme";
					}
				} else {
					// Default (when Media-Queries are not supported)
					this.savedTheme = this.appTheme;
				}
			}

			// save the new theme in the localStorage
			localStorage.setItem("nafieSavedTheme", this.savedTheme);
		},

		// detect the theme changes
		changeAppTheme() {
			this.savedTheme === "light_theme"
				? (this.savedTheme = "dark_theme")
				: (this.savedTheme = "light_theme");

			// save the new theme in the localStorage
			localStorage.setItem("nafieSavedTheme", this.savedTheme);
		},

		// toggle nav menu
		toggleNavMenu() {
			this.isNavMenuOpen = !this.isNavMenuOpen;
			this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
		},

		// open nav menu
		openNavMenu() {
			const bodyEl = document.getElementsByTagName("body")[0];

			this.isNavMenuOpen = true;

			bodyEl.setAttribute("style", "overflow-y: hidden;");

			// set focus on nav menu
			this.$refs.headerNav.querySelector(".desktop-menu-content").focus();
		},

		// close nav menu
		closeNavMenu() {
			const bodyEl = document.getElementsByTagName("body")[0];

			this.isNavMenuOpen = false;

			bodyEl.removeAttribute("style");

			// set focus on nav menu toggle button
			this.$refs.navMenuToggleBtn.focus();
		},

		// nav menu tab trap
		navMenuTabTrap() {
			const nav = this.$refs.headerNav;
			const focusableElementsString =
				'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
			let firstTabStop;
			let lastTabStop;
			let isFirstTabStop;
			let isLastTabStop;

			document.addEventListener("keyup", (e) => {
				if (nav.classList.contains("menu-open")) {
					// get first & last focusable elements in the side menu for the tab trap
					const visibleFocusableEls = [
						...nav.querySelectorAll(focusableElementsString),
					].filter(
						(el) =>
							window
								.getComputedStyle(el)
								.getPropertyValue("visibility") !== "hidden"
					);
					firstTabStop = visibleFocusableEls[0];
					lastTabStop =
						visibleFocusableEls[visibleFocusableEls.length - 1];

					if (e.code === "Tab") {
						if (e.shiftKey) {
							/* shift + tab */ // if this is the first item, move to the last item
							isFirstTabStop && lastTabStop.focus();
						} /* tab */ else {
							// if this is the last item, go back to the first item
							isLastTabStop && firstTabStop.focus();
						}

						// close nav menu on Escape button press
					} else if (e.code === "Escape") {
						this.toggleNavMenu();
					}

					// get current active element
					const activeEl = document.activeElement;

					// check if last item or not
					isLastTabStop = activeEl === lastTabStop ? true : false;

					// check if first item or not
					isFirstTabStop = activeEl === firstTabStop ? true : false;
				}
			});
		},

		// apply pan effect hero image
		heroImgPanEffect() {
			const parent = this.$refs.heroSection;

			// return if disabled
			if (!parent || !parent.getAttribute("data-paneffect")) {
				return;
			}

			const layer1 = parent.querySelectorAll(".layer")[0];
			const layer2 = parent.querySelectorAll(".layer")[1];

			parent.addEventListener("mousemove", (e) => {
				const x =
					((e.x - parent.getBoundingClientRect().x) /
						parent.offsetWidth) *
					100;
				const y =
					((e.y - parent.getBoundingClientRect().y) /
						parent.offsetHeight) *
					100;

				parent.classList.add("parallax-animation");

				layer1.setAttribute(
					"style",
					`transform-origin: ${x}vw ${y}vh;`
				);
				layer2.setAttribute(
					"style",
					`transform-origin: ${x}vw ${y}vh;`
				);
			});
		},

		// scrolling options
		scrollingOptions() {
			const scrollPosition = window.pageYOffset;

			// check for current scroll position to minimize the header
			this.isHeaderBig =
				scrollPosition >= this.startMinimizingHeaderAt ? false : true;

			// check for current scroll position to toggle the header
			this.isHeaderHidden =
				scrollPosition > 100 && scrollPosition > this.lastScrollPosition
					? true
					: false;
			this.lastScrollPosition = scrollPosition;

			// check for current scroll position to show the scrollTop button
			this.isScrollTopBtnDisplayed =
				scrollPosition >= this.startShowingScrollTopBtnAt
					? true
					: false;
		},

		// scroll to top
		scrollToTop() {
			window.scroll({ top: 0, behavior: "smooth" });
		},

		// initialize the first displayed type of skills
		initSkillsFirstType() {
			const skillsSwitchBtn = this.$refs.skillsSwitchBtn;

			// return if disabled
			if (!skillsSwitchBtn) {
				return;
			}

			this.skillsType = skillsSwitchBtn.querySelector("input").value;
		},

		// initialize VanillaTilt library in portfolio section
		initializeTilt() {
			const portfolioItems = this.$refs.portfolioItems;

			// return if disabled
			if (!portfolioItems) {
				return;
			}

			VanillaTilt.init(
				portfolioItems.querySelectorAll(".portfolio-item"),
				{
					max: 8,
					speed: 400,
					glare: true,
					"max-glare": 0.3,
				}
			);
		},

		// get portfolio items
		getPortfolioItems() {
			const itemsArr = this.allPortfolioItems
				.filter((item) => {
					const urlParams = new URLSearchParams(
						window.location.search
					);
					const tax = urlParams.get("tax");

					if (tax) {
						if (tax === "cat") {
							const cat = urlParams.get("cat");

							this.portfolioArchiveName = cat;
							return item.category.includes(cat);
						} else if (tax === "tools") {
							const tool = urlParams.get("tools");

							this.portfolioArchiveName = tool;
							return item.tools.includes(tool);
						}
					} else {
						return (
							this.currentFilter === "All" ||
							item.category.includes(this.currentFilter)
						);
					}
				})
				.slice(
					this.filteredPortfolioItems.length,
					this.portfolioItemsPage * this.itemsPerPage
				);

			// check if have works or not
			if (itemsArr.length) {
				this.portfolioItems.push(...itemsArr);

				// initialize VanillaTilt for new items
				setTimeout(
					() => this.portfolioItemsPage > 1 && this.initializeTilt(),
					0
				);

				this.portfolioItemsPage++;
			} else {
				// show message "No works" to the user
				this.setNotify({
					className: "danger",
					msg: this.$refs.portfolioItems.getAttribute(
						"data-no-works-msg"
					),
					time: 3000,
				});
			}
		},

		// filter portfolio items
		filterPortfolioItems(filter) {
			this.currentFilter = filter;
			this.portfolioItemsPage = 1;

			if (this.filteredPortfolioItems.length) {
				// initialize VanillaTilt for new items
				setTimeout(() => this.initializeTilt(), 0);
			} else {
				// get new portfolio items
				this.getPortfolioItems();
			}
		},

		// contact form validation
		contactFormValidation() {
			// contact form
			const contactForm = this.$refs.contactForm;

			// form controls
			const name = contactForm.querySelector('input[name="name"]');
			const email = contactForm.querySelector('input[name="email"]');
			const phone = contactForm.querySelector('input[name="phone"]');
			const message = contactForm.querySelector("textarea");
			// form validation status
			let errors = {
				name: { required: true, minLength: true },
				email: { required: true, invalid: true },
				phone: { invalid: true },
				message: { required: true },
			};

			/* --------------- */
			/* name validation */
			/* --------------- */

			// required validation
			if (name.value === "") {
				errors.name.required = true;
				this.setNotify({
					id: "nameRequired",
					className: "danger",
					msg: name
						.closest(".control")
						.querySelector(".errors-msgs .required").value,
				});
			} else {
				errors.name.required = false;
				this.dismissNotify("nameRequired");
			}

			// minlength validation
			if (
				name.value.length > 0 &&
				name.value.length < name.getAttribute("minlength")
			) {
				errors.name.minLength = true;
				this.setNotify({
					id: "nameMinLength",
					className: "danger",
					msg: name
						.closest(".control")
						.querySelector(".errors-msgs .minLength").value,
				});
			} else {
				errors.name.minLength = false;
				this.dismissNotify("nameMinLength");
			}

			// toggle invalid errors & style classes
			if (
				Object.keys(errors.name).some(
					(err) => errors.name[err] === true
				)
			) {
				name.classList.remove("valid");
				name.classList.add("invalid");
			} else {
				name.classList.remove("invalid");
				name.classList.add("valid");
			}

			/* ---------------- */
			/* email validation */
			/* ---------------- */

			// required validation
			if (email.value === "") {
				errors.email.required = true;
				this.setNotify({
					id: "emailRequired",
					className: "danger",
					msg: email
						.closest(".control")
						.querySelector(".errors-msgs .required").value,
				});
			} else {
				errors.email.required = false;
				this.dismissNotify("emailRequired");
			}

			// email validation
			if (
				email.value.length > 0 &&
				!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
					email.value
				)
			) {
				errors.email.invalid = true;
				this.setNotify({
					id: "emailInvalid",
					className: "danger",
					msg: email
						.closest(".control")
						.querySelector(".errors-msgs .invalid").value,
				});
			} else {
				errors.email.invalid = false;
				this.dismissNotify("emailInvalid");
			}

			// toggle invalid errors & style classes
			if (
				Object.keys(errors.email).some(
					(err) => errors.email[err] === true
				)
			) {
				email.classList.remove("valid");
				email.classList.add("invalid");
			} else {
				email.classList.remove("invalid");
				email.classList.add("valid");
			}

			/* ---------------- */
			/* phone validation */
			/* ---------------- */

			// phone validation
			if (
				phone.value.length > 0 &&
				!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
					phone.value
				)
			) {
				errors.phone.invalid = true;
				this.setNotify({
					id: "phoneInvalid",
					className: "danger",
					msg: phone
						.closest(".control")
						.querySelector(".errors-msgs .invalid").value,
				});
			} else {
				errors.phone.invalid = false;
				this.dismissNotify("phoneInvalid");
			}

			// toggle invalid errors & style classes
			if (
				Object.keys(errors.phone).some(
					(err) => errors.phone[err] === true
				)
			) {
				phone.classList.remove("valid");
				phone.classList.add("invalid");
			} else {
				phone.classList.remove("invalid");
				phone.classList.add("valid");
			}

			/* ------------------ */
			/* message validation */
			/* ------------------ */

			// required validation
			if (message.value === "") {
				errors.message.required = true;
				this.setNotify({
					id: "messageRequired",
					className: "danger",
					msg: message
						.closest(".control")
						.querySelector(".errors-msgs .required").value,
				});
			} else {
				errors.message.required = false;
				this.dismissNotify("messageRequired");
			}

			// toggle invalid errors & style classes
			if (
				Object.keys(errors.message).some(
					(err) => errors.message[err] === true
				)
			) {
				message.classList.remove("valid");
				message.classList.add("invalid");
			} else {
				message.classList.remove("invalid");
				message.classList.add("valid");
			}

			// send the message if the form is valid
			!Object.values(errors).some((control) =>
				Object.values(control).some(Boolean)
			) && this.sendContactFormMessage(contactForm);
		},

		// send message from contact form
		sendContactFormMessage(form) {
			const url = form.getAttribute("action");
			const formData = new FormData(form);

			// start loading spinner
			this.startLoading();
			requestData = {
				name: form.name.value,
				email: form.email.value,
				phone: form.phone.value,
				message: form.message.value,
			};
			// send post request
			axios
				.post(url, requestData)
				.then((res) => {
					if (res) {
						// show success message
						this.setNotify({
							className: "success",
							msg: form.getAttribute("data-success-msg"),
							time: 5000,
						});

						// reset all form inputs
						form.reset();

						// remove inputs valid classes
						form.querySelectorAll(".valid").forEach((el) =>
							el.classList.remove("valid")
						);
					} else if (res === null) {
						// show error message
						this.setNotify({
							className: "danger",
							msg: form.getAttribute("data-err-msg"),
							time: 5000,
						});
					}

					// end loading spinner
					this.endLoading();
				})

				.catch((err) => console.log(err));
		},

		// show messages by toast notifications
		setNotify({ id, className, msg, time }) {
			const notify = {
				id: id || `${Date.now()}${this.notifications.length}`,
				className,
				msg,
				time,
			};

			if (id) {
				!this.notifications.some((e) => e.id === id) &&
					this.notifications.push(notify);
			} else {
				this.notifications.push(notify);
			}

			// remove this notification from the array after (n) seconds
			time && setTimeout(() => this.dismissNotify(notify.id), time);
		},

		// dismiss the notifications
		dismissNotify(id) {
			const index = this.notifications.findIndex(
				(notify) => notify.id === id
			);
			index > -1 && this.notifications.splice(index, 1);
		},

		// add ajax loading spinner
		startLoading() {
			this.ajaxLoading.push(true);
		},

		// remove ajax loading spinner
		endLoading() {
			this.ajaxLoading.pop();
		},
	},
	computed: {
		// flag to toggle ajax loading spinner
		isAjaxLoading() {
			return this.ajaxLoading.some((state) => state === true);
		},

		// get the total years of experience
		experienceYears() {
			return (
				new Date(
					new Date() - new Date(String(this.careerStartDate))
				).getFullYear() - 1970
			);
		},

		// split experience items into chunks of 3 items
		experienceChunks() {
			return [...Array(Math.ceil(this.experienceItems.length / 3))].map(
				() => this.experienceItems.splice(0, 3)
			);
		},

		// filtered portfolio items
		filteredPortfolioItems() {
			const urlParams = new URLSearchParams(window.location.search);
			const tax = urlParams.get("tax");
			if (tax) {
				return this.portfolioItems;
			} else {
				return this.portfolioItems.filter(
					(item) =>
						this.currentFilter === "All" ||
						item.category.includes(this.currentFilter)
				);
			}
		},

		// get single portfolio item
		getSinglePortfolioItem() {
			const urlParams = new URLSearchParams(window.location.search);
			const id = urlParams.get("id");

			return this.allPortfolioItems.find((item) => item.id == id);
		},

		// get the total years of copyright
		copyrightDate() {
			const yearsDuration =
				new Date(
					new Date() - new Date(String(this.copyrightStartDate))
				).getFullYear() - 1970;
			return yearsDuration === 0
				? this.copyrightStartDate
				: `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration
				}`;
		},
	},
	directives: {
		// clone directive
		clone: {
			mounted(el) {
				el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
			},
		},

		// add stagger delay to children elements
		staggerdelay: {
			mounted(el, binding) {
				[...el.children].forEach((child, i) => {
					child.setAttribute(
						"style",
						`animation-delay: ${(i + 1) * (binding.value || 100)}ms`
					);
				});
			},
		},

		// tooltip directive
		tooltip: {
			mounted(el, binding) {
				el.classList.add("has-tooltip");
				el.insertAdjacentHTML(
					"beforeend",
					`<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`
				);
			},
		},
	},
});
app.mount("#app");
