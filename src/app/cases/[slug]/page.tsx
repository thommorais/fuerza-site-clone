import PagesHeader from '.components/PagesHeader'

import CaseSingle from '.components/CaseSingle'

export default function Case({ params }: { params: { slug: string } }) {
	const caseData = casesData.find((c) => c.url === `/cases/${params.slug}/`)

	if (!caseData) {
		return null
	}

	return (
		<>
			<PagesHeader pageTitle={caseData.title} />
			<CaseSingle caseData={caseData} />
		</>
	)
}

var casesData = [
	{
		id: 8897,
		title: 'Al Jazeera',
		content:
			'&lt;p data-renderer-start-pos=&#039;1369&#039;&gt;This was our first job for the Al Jazeera network. An innovative website that makes the public experience first hand how a person with a disability lives in cities like New York, Lagos or Mumbai.&lt;/p&gt;\n&lt;p data-renderer-start-pos=&#039;1566&#039;&gt;The site unites web language and video in an accessible way for PwDs such as blindness or deafness and has the historic milestone of being one of the first digital interactive experiences to reach the AA level in the WCAG (Web Content Acessibility Guidelines) 2.1.&lt;/p&gt;\n&lt;p data-renderer-start-pos=&#039;1832&#039;&gt;It was a multi-award winning project around the world, winner of the New York Festival, TV, Films &amp;amp; Awards, The Drum Awards for Online Media 2022, The Telly Awards, Gracie Awards, 7th Annual Shorty Impact, One World Media Impact, Venice TV Awards and Online Journalism Awards and also an Emmy Nomination, where we worked on the development, implementation of accessibility, game and UX of the project together with the Al Jazeera team. With great pride.&lt;/p&gt;\n',
		url: '/cases/al-jazeera-en/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/al-jazeera-en/',
		skills:
			'<ul>\r\n \t<li>UX</li>\r\n \t<li>UI</li>\r\n \t<li>Frontend</li>\r\n \t<li>WCAG Accessibility</li>\r\n</ul>\r\n&nbsp;',
		banner: '',
		stats: [
			{ name: 'hours in the life of 3 PwDs', number: '24', prefix: '' },
			{ name: 'PwDs by 2050', number: '1', prefix: 'B' },
			{ name: 'awards around the world', number: '10', prefix: '' },
		],
		videoURL: 'https://vimeo.com/784827643',
		videoPoster:
			'http://i.vimeocdn.com/video/1576706931-774afd300fd3d94e408c5f973814fb1122616c56897e7adbaf8ebf3d378d9625-d_640',
		isMobile: false,
		gallery: [],
		caseURL: 'https://inaccessiblecities.ajcontrast.com/',
		caseURLLabel: 'Access the website',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 8729,
		title: 'Medal.tv',
		content:
			'&lt;p&gt;The games industry is a segment that does not stop growing, moving billions around the world. Within this market,&nbsp;Medal.tv is one of the most challenging projects our team has ever done: an app that records game clips, shares them on social networks and offers a wide range of options to customize those videos. With the design and development of our team, we made the app&amp;#8217;s official website, an exemplary design work built around the brand. Beyond that, we did a consultancy in UX research which included a complete report for the company to define its roadmap both for the logged area of the website and for the mobile app itself.&lt;/p&gt;\n',
		url: '/cases/medal-tv-en/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/medal-tv-en/',
		skills: '<ul>\r\n \t<li>Motion Design</li>\r\n \t<li>UX</li>\r\n \t<li>UI</li>\r\n \t<li>Frontend</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'USD in funding on Crunchbase', number: '45', prefix: 'M' },
			{ name: 'gameplays recorded per second', number: '150000', prefix: '+' },
			{ name: 'gamers online per second', number: '180000', prefix: '+' },
			{ name: 'more processing speed', number: '10', prefix: 'x' },
		],
		videoURL: 'https://vimeo.com/765041713',
		videoPoster:
			'http://i.vimeocdn.com/video/1536127049-c78c23e3586bc64b5c9e2bdf2908d6ed8852b85aee1a52edb270025f3647c0d6-d_640',
		isMobile: false,
		gallery: [],
		caseURL: 'https://medal.tv/',
		caseURLLabel: 'Access the website',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 8923,
		title: '',
		content:
			'&lt;p&gt;Matrioska is an online mental health clinic that came to us at an embryonic stage: it had no name, just an idea of how it would work. Based on conversations with the client, we were involved in all stages: from creating the naming, to logo design, going through the design and development of the website to the functioning of the online platform. A process of creating a branding and exploration concept that had an impact at all levels, from the loader to even in the way people navigate the site. With a different and revolutionary interface, it was a project that was nominated for international awards (and won a few), executed from an initial idea of the client that we turned into reality.&lt;/p&gt;\n',
		url: '/cases/matrioska/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/matrioska/',
		skills:
			'<ul>\r\n \t<li>Branding</li>\r\n \t<li>UX/UI</li>\r\n \t<li>Frontend</li>\r\n \t<li>Backend</li>\r\n \t<li>Motion design</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'users on launch week', number: '1200', prefix: '+' },
			{ name: 'international awards', number: '4', prefix: '+' },
			{ name: 'subscribed patients', number: '240', prefix: '+' },
		],
		videoURL: 'https://vimeo.com/785224306',
		videoPoster:
			'http://i.vimeocdn.com/video/1577780308-5d17c18636b3369c088b65bdd513d041c5693ab12f84a216e9594835d70a385b-d_640',
		isMobile: false,
		gallery: [],
		caseURL: 'https://portalmatrioska.com.br/',
		caseURLLabel: 'Access the website',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 165,
		title: 'BlueStacks X',
		content:
			'&lt;p&gt;BlueStacks X has taken the gaming habit to another level. It&rsquo;s a platform that allows you to play any game on low-performance devices.&lt;/p&gt;\n&lt;p&gt;No downloads, installations or disk space usage. From the beginning, all the visuals were created by our design team, including branding, animations and even the app&amp;#8217;s interface.&lt;/p&gt;\n&lt;p&gt;A challenge, since it is a broad product with the most diverse types of games. We presented a design focused on usability and the balance between energy, dynamism and accessibility of information and the result could be seen in the news sections of gamers around the world.&lt;/p&gt;\n',
		url: '/cases/bluestacks/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/bluestacks/',
		skills:
			'<ul>\r\n \t<li>UX/UI design</li>\r\n \t<li>illustration</li>\r\n \t<li>marketing</li>\r\n \t<li>Branding</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'games available', number: '2000000', prefix: '+' },
			{ name: 'FPS guaranteed', number: '60', prefix: '' },
			{ name: 'new players', number: '1', prefix: 'B+' },
		],
		videoURL: 'https://vimeo.com/679293132',
		videoPoster:
			'http://i.vimeocdn.com/video/1376514573-5e5c38c7c4808657dd3325fa0b1b72a63f4fadcb548649a86b3536c129ea70c8-d_640',
		isMobile: false,
		gallery: [],
		caseURL: 'https://x.bluestacks.com/',
		caseURLLabel: 'Access the website',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 172,
		title: 'Ready Set',
		content:
			'&lt;p&gt;A project that defines the term &amp;#8220;partnership of pride&amp;#8221;. It was also a baptism of fire: the first project in which we participated from beginning to end, from design to internal logistics, from programming to user experience. Not only their website, we&amp;#8217;re developing a new product that enables high-production creative videos, with low-cost and a solid, customizable database that makes the ads&nbsp; even more effective. A logistical puzzle with great&nbsp; market-impact.&lt;/p&gt;\n',
		url: '/cases/ready-set/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/ready-set/',
		skills:
			'<ul>\r\n \t<li>frontend</li>\r\n \t<li>backend</li>\r\n \t<li>UX design</li>\r\n \t<li>webdesign</li>\r\n \t<li>product development</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'participating companies', number: '40', prefix: '+' },
			{ name: 'validated scripts', number: '3000', prefix: '+' },
			{ name: 'videos published', number: '2000', prefix: '+' },
			{ name: 'min average session length', number: '5', prefix: '+' },
		],
		videoURL: 'https://vimeo.com/586491509',
		videoPoster:
			'http://i.vimeocdn.com/video/1213449684-081cf66e144eb691120d0eb18008c666efdbad4132e08ffd01ff2428b64622d4-d_640',
		isMobile: false,
		gallery: [],
		caseURL: 'https://readyset.co/',
		caseURLLabel: 'Access the website',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 5603,
		title: 'Eurekka',
		content:
			'&lt;p&gt;One of the largest online psychotherapy clinics in Brazil, with great expansion in the last 24 months. Fuerza was an active part of this growth, working day after day on the infrastructure, support, design and development of the company&amp;#8217;s most diverse projects. Among these works are a chatbot with unprecedented precision in the market and the Eurekka app for Android and IOS, our first app developed in-house, with a result that makes us proud.&lt;/p&gt;\n',
		url: '/cases/eurekka/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/eurekka/',
		skills:
			'<ul>\r\n \t<li>Frontend</li>\r\n \t<li>Backend</li>\r\n \t<li>UX/UI design</li>\r\n \t<li>App Development</li>\r\n \t<li>Bot development</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'registered users', number: '110000', prefix: '+' },
			{ name: 'active users', number: '9000', prefix: '+' },
			{ name: 'app store reviews', number: '500', prefix: '+' },
			{ name: 'average app store ratings', number: '4', prefix: '+' },
		],
		videoURL: 'https://vimeo.com/586485771',
		videoPoster:
			'http://i.vimeocdn.com/video/1213438192-64bb23082b4322d9cdd0ae560079a84956280a816d184f672e2d504ec7ec4da8-d_640',
		isMobile: false,
		gallery: [],
		caseURL: 'https://eurekka.me/aplicativo/',
		caseURLLabel: 'Download the app',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 5602,
		title: 'Jam City',
		content:
			'&lt;p&gt;Established giant of the mobile games and partner of brands like Snoopy, Family Guy and Harry Potter, the company also has great success with its own creations, such as the Cookie Jam and Panda Pop franchises. JAM City is also a long-time partner of Fuerza. For them we developed the site for the hit Harry Potter Mistery at Hogwarts, Futurama Worlds of Tomorrow and in this last year the partnership&acute;s level up with the development of the JAM City website itself.&lt;/p&gt;\n',
		url: '/cases/jam-city/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/jam-city/',
		skills:
			'<ul>\r\n \t<li>Frontend</li>\r\n \t<li>Backend</li>\r\n \t<li>UX/UI design</li>\r\n \t<li>SEO</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'million active users', number: '31', prefix: '' },
			{ name: 'downloads', number: '1300000', prefix: '' },
			{ name: 'games created', number: '20', prefix: '' },
		],
		videoURL: 'https://vimeo.com/586489919',
		videoPoster:
			'http://i.vimeocdn.com/video/1213446922-da935b4db6d4393f36e189ec72b4376fc66a65ab0125439931a79dac14b4a2c6-d_640',
		isMobile: false,
		gallery: [],
		caseURL: 'https://www.jamcity.com/',
		caseURLLabel: 'Access the website',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 6715,
		title: 'WHO',
		content:
			'&lt;p&gt;One oft he biggest lessons learned from the Covid-19 pandemic was the importance of sharing quality scientific information. The importance of great minds working in a network. This page we developed for WHO is for that purpose. It \u0301s a panel that publishes statistics and research proposals about tropical diseases around the world. Easily accessible and multi-language, just select the country or region you want on the interactive globe and know what you need.&lt;/p&gt;\n',
		url: '/cases/who/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/who/',
		skills:
			'<ul>\r\n \t<li>frontend</li>\r\n \t<li>backend</li>\r\n \t<li>UI/UX design</li>\r\n \t<li>webdesign</li>\r\n \t<li>SEO</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'signatory countries', number: '194', prefix: '' },
			{ name: 'projects in progress', number: '575', prefix: '' },
			{ name: 'regions involved', number: '6', prefix: '' },
			{ name: 'languages', number: '3', prefix: '' },
		],
		videoURL: 'https://vimeo.com/639300566',
		videoPoster: 'http://i.vimeocdn.com/video/1285526912-252fd9f94a1b5c6b4801eb5919ccd64eac4fecfce4fa53f95_640',
		isMobile: false,
		gallery: [],
		caseURL: 'https://irmooc.org/',
		caseURLLabel: 'Access the website',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 5600,
		title: '8W8',
		content:
			'&lt;p&gt;In the global entrepreneurship scenario, there is a rule: what the 8W8 says has weight. And we&amp;#8217;re not the ones saying this, Forbes magazine itself agrees. The publication has already made room for CEO Ralf Hirt on its pages twice. Fuerza, on the other hand, has done several contributions for this project that is helping to unlock the potential of companies around the globe: we created the entire visual identity, developed a website with the awesome CovQ Assessment and even helped publishing a book. After all, if it is relevant in the world, you can count on our strength.&lt;/p&gt;\n',
		url: '/cases/8w8/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/8w8/',
		skills:
			'<ul>\r\n \t<li>Frontend</li>\r\n \t<li>Backend</li>\r\n \t<li>UX/UI design</li>\r\n \t<li>Marketing</li>\r\n \t<li>Branding</li>\r\n \t<li>SEO</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'digit number of views on LinkedIn', number: '6', prefix: '' },
			{ name: 'digit number of participants on CovQ', number: '3', prefix: '' },
			{ name: 'time appearances on Forbes', number: '2', prefix: '' },
		],
		videoURL: 'https://vimeo.com/586482999',
		videoPoster:
			'http://i.vimeocdn.com/video/1213432821-53edd882b6e8434aae190ce96e71332306c554f3f5b07e202adc185576faa12f-d_640',
		isMobile: false,
		gallery: [],
		caseURL: 'https://www.8w8.com/',
		caseURLLabel: 'Access the website',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 174,
		title: 'Branding',
		content:
			'&lt;p&gt;Branding is always a challenge, both in terms of marketing and design. &lt;strong&gt;Successful branding&lt;/strong&gt; relies on &lt;strong&gt;three main aspects&lt;/strong&gt;:&lt;/p&gt;\n&lt;p&gt;&lt;strong&gt;1)&lt;/strong&gt; In a brand-saturated world, the brand&amp;#8217;s identity must be &lt;strong&gt;one of a kind &lt;/strong&gt;and stand out in the crowd.&lt;/p&gt;\n&lt;p&gt;&lt;strong&gt;2)&lt;/strong&gt; The brand must &lt;strong&gt;translate&lt;/strong&gt; the business perfectly: its &lt;strong&gt;values&lt;/strong&gt;, &lt;strong&gt;strengths&lt;/strong&gt;, and what makes it &lt;strong&gt;distinctive.&lt;/strong&gt;&lt;/p&gt;\n&lt;p&gt;&lt;strong&gt;3)&lt;/strong&gt; In a busy world, the brand must say &lt;strong&gt;a lot with little&lt;/strong&gt;.&lt;/p&gt;\n&lt;p&gt;And to boot, the brand must be &lt;strong&gt;visually appealing&lt;/strong&gt;&amp;#8230;obviously.&lt;/p&gt;\n&lt;p style=&#039;font-weight: 400;&#039;&gt;Believe us, achieving this once is quite a feat &amp;#8211; one that our team has accomplished &lt;strong&gt;hundreds of times&lt;/strong&gt;. Who knows, maybe &lt;strong&gt;your brand&lt;/strong&gt; can help us get to a thousand?&lt;/p&gt;\n',
		url: '/cases/branding/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/branding/',
		skills:
			'<ul>\r\n \t<li>design</li>\r\n \t<li>marketing</li>\r\n \t<li>branding</li>\r\n \t<li>strategies</li>\r\n \t<li>naming</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'brands created', number: '200', prefix: '+' },
			{ name: 'of these brands made sites with us', number: '80', prefix: '+' },
			{ name: 'of these brands are still active ', number: '100', prefix: '+' },
			{ name: 'new materials done', number: '400', prefix: '+' },
		],
		videoURL: '',
		videoPoster: null,
		isMobile: false,
		gallery: [],
		caseURL: '',
		caseURLLabel: '',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 170,
		title: 'Harry Potter',
		content:
			'&lt;p&gt;Magic happened when the American game giant, &lt;strong&gt;Jam City&lt;/strong&gt;, the &lt;strong&gt;Harry Potter&lt;/strong&gt; &lt;strong&gt;mega-franchise&lt;/strong&gt;, &lt;strong&gt;Warner Bros&lt;/strong&gt;., and &lt;strong&gt;our Fuerza team &lt;/strong&gt;came together. The result was the &lt;strong&gt;website&lt;/strong&gt; for the game that &lt;strong&gt;topped app store charts&lt;/strong&gt; around the globe in its &lt;strong&gt;first 24 hours&lt;/strong&gt; &amp;#8211; Harry Potter: Hogwarts Mystery.&lt;/p&gt;\n&lt;p&gt;&lt;strong&gt;&nbsp;&lt;/strong&gt;This project was challenging for two reasons: the &lt;strong&gt;race against the clock&lt;/strong&gt; and the need to develop a &lt;strong&gt;multilingual system &lt;/strong&gt;that could be &lt;strong&gt;completely&lt;/strong&gt; managed by the client.&lt;/p&gt;\n&lt;p&gt;With no magic wand coming to our rescue, we had just our skills to rely on. But, if we may say so ourselves, seeing the &lt;strong&gt;smashing success &lt;/strong&gt;of the release, not even Dumbledore could have done better.&lt;/p&gt;\n',
		url: '/cases/harry-potter/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/harry-potter/',
		skills: '<ul>\r\n \t<li>frontend</li>\r\n \t<li>backend</li>\r\n \t<li>multi-language</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'millions dollars in revenue', number: '110', prefix: '' },
			{ name: 'million downloads on the first 24hs', number: '9', prefix: '' },
			{ name: ' countries put it in the leading apps', number: '32', prefix: '' },
			{ name: 'languages on a full manageable website', number: '6', prefix: '' },
		],
		videoURL: 'https://vimeo.com/359065476',
		videoPoster:
			'http://i.vimeocdn.com/video/812856856-26e0b9dea5b98953152c9df34b438c3d01d3cb87f28dba2c89a1d9624794577b-d_640',
		isMobile: false,
		gallery: [],
		caseURL: 'http://www.harrypotterhogwartsmystery.com',
		caseURLLabel: 'Access the website',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
	{
		id: 168,
		title: 'Words With Friends',
		content:
			'&lt;p&gt;Let&amp;#8217;s be honest &amp;#8211; can you name a more popular game than &lt;strong&gt;scrabble&lt;/strong&gt;?&lt;/p&gt;\n&lt;p&gt;You want an answer? Well, all you need to know is that Zynga did a nightly live trivia game broadcast, &lt;strong&gt;Words with Friends LIVE&lt;/strong&gt;, within Words with Friends 2. Country superstar Garth Brooks co-hosted the season finale that had the United States &lt;strong&gt;hooked&lt;/strong&gt;.&lt;/p&gt;\n&lt;p&gt;Fuerza was a part of this.&lt;/p&gt;\n&lt;p&gt;During the six-month project, we combined several resources to &lt;strong&gt;create a light version&lt;/strong&gt; of the game, teamed up with &lt;strong&gt;Oxford Dictionaries&lt;/strong&gt; and, in the end, developed an &lt;strong&gt;interactive ranking&lt;/strong&gt; with the performance of &lt;strong&gt;millions of players&lt;/strong&gt; mapped out in &lt;strong&gt;real time &lt;/strong&gt;via a complex heat map.&lt;/p&gt;\n&lt;p&gt;Woah. Who did it? &lt;strong&gt;F-u-e-r-z-a!&lt;/strong&gt;&lt;/p&gt;\n',
		url: '/cases/word-with-friends/',
		permalink: 'https://www.fuerzastudio.com.br/en/cases/word-with-friends/',
		skills:
			'<ul>\r\n \t<li>frontend</li>\r\n \t<li>backend</li>\r\n \t<li>UX design</li>\r\n \t<li>Webdesign</li>\r\n \t<li>Motion Graphics</li>\r\n</ul>',
		banner: '',
		stats: [
			{ name: 'million downloads', number: '10', prefix: '+' },
			{ name: 'thousand new users achieved ', number: '570', prefix: '' },
			{ name: 'thousand page views in a month', number: '980', prefix: '' },
			{ name: 'years of unbroken success', number: '10', prefix: '' },
		],
		videoURL: 'https://vimeo.com/359066265',
		videoPoster:
			'http://i.vimeocdn.com/video/812857639-13409ff2d0bb94b1d5e11b2be47aa3fd5c919219c1401f84151b15cc298f1cf3-d_640',
		isMobile: false,
		gallery: [],
		caseURL: 'https://www.wordswithfriendslive.com/',
		caseURLLabel: 'Access the website',
		aboutProject: 'about the project_',
		keyNumbers: 'project key numbers_',
	},
]
