import TeamCard from '.dummies/TeamCard'
import InternalPageHeading from '.dummies/InternalPageHeading'

import S from './styles/main.module.css'

function CasesMain() {
	const team = [
		{
			name: 'Pablo de la Rocha',
			role: 'Co-founder + Chief Creative Officer (CCO)',
			skills: 'UX Design, UI Design, Art Direction, Branding, Graphic Design, Creative Planning, Business Development',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210811194857/pablo.jpg',
		},
		{
			name: 'Diego Fagundes',
			role: 'Co-founder + Chief Technology Officer (CTO)',
			skills: 'Web and Mobile Development',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2019/08/04135921/Diego_v2.jpg.webp',
		},
		{
			name: 'Rodrigo Meurer',
			role: 'Chief Operations Officer (COO)',
			skills:
				'Process design and management, Project portfolio management, Leadership and team management, Agile Methodologies, Requirements Analysis / PMO',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135823/rodrigo.jpg.webp',
		},
		{
			name: 'Eduardo Argoud',
			role: 'VP of Design',
			skills: 'UX Design, UI Design, Art Direction, Branding, Advertising, Graphic Design, Creative Planning',
			image:
				'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2018/08/04135827/foto_fuerza_dudu2.png',
		},
		{
			name: 'Fellipe Sant’Anna',
			role: 'Chief Human Resources Officer (CHRO)',
			skills:
				'People Management, Project Management, Strategic Planning, Process Improvement, Leadership and Interpersonal Understanding.',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211022013155/Fellipe.jpg',
		},
		{
			name: 'Andressa Werner',
			role: 'Project Manager',
			skills: 'Project Management, Agile Methodologies, Leadership  ',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20230209221839/andressa.jpg',
		},
		{
			name: 'Augusto Bardini',
			role: 'Full-Stack Tech Leader',
			skills: 'React, React Native, Ionic, NodeJS, Firebase, ElasticSearch',
			image:
				'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135825/gabrielfernandes.jpg.webp',
		},
		{
			name: 'Gabriel Costa',
			role: 'Project Manager',
			skills:
				'Project Management, Agile methodologies, Testing management , People management, Requirement Analysis, business management',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220222152846/gabriel_costa.jpg',
		},
		{
			name: 'Gerbton Fonseca',
			role: 'Back End Tech Leader',
			skills: 'PHP, Javascript, Wordpress, Laravel, ReactJS, FullStack, Ionic, Angular',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211020212637/Gerbton.jpg',
		},
		{
			name: 'Guilherme Brod',
			role: 'Global Business Manager',
			skills:
				'Business Management, Strategy, Planning, Leadership, Marketing, Business Partnership, Requirement Analysis, Estimations.',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221115140733/foto.jpg',
		},
		{
			name: 'Leonardo Ogassawara',
			role: 'Project Manager',
			skills: 'Waterfall, Agile, Scrum, Kanban, Project management, Product management',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220613211911/Leo.jpg',
		},
		{
			name: 'Liara Lima',
			role: 'Project Manager',
			skills: 'Project Management, Product Management, Kanban, Scrum',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210811211438/Liara-Lima.jpg',
		},
		{
			name: 'Luciano Souza',
			role: 'Brazil Business Manager',
			skills: 'Sales, estimations, quote and requirements analysis',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135824/luciano.jpg.webp',
		},
		{
			name: 'Luiza Maia Fagundes',
			role: 'Project Manager',
			skills: 'Project Management, Product Management, Agile, Scrum, Kanban',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220809194919/foto_Luiza.jpg',
		},
		{
			name: 'Marina Guagliariello',
			role: 'Project Manager',
			skills: 'Project Management, Agile Methodologies, Effective communication',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20230209220618/Marina.jpg',
		},
		{
			name: 'Paulo Ferreira',
			role: 'Front End Tech Leader',
			skills: 'Leadership, JavaScript, React, Node.js, WordPress',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135824/paulo.jpg.webp',
		},
		{
			name: 'Richard Felicio',
			role: 'QA Leader',
			skills:
				'Java, Ruby, SQLServer, UFT, ALM, Selenium, BDD, Cucuumber, APIRestAssure, HTML, Scrum, Agile and VBScript',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220822181109/richard.jpg',
		},
		{
			name: 'Adolfo Schneider',
			role: 'Fullstack Developer',
			skills: 'React, Angular, NodeJS, Firebase, Mongo, Elasticsearch',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135827/adolfo.jpg.webp',
		},
		{
			name: 'Alefy Pimentel',
			role: 'Frontend Developer',
			skills: 'Web Development, Frontend, HTML/CSS, SASS, Javascript, Animation, WordPress',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812192500/alefy.jpg',
		},
		{
			name: 'Alexandre Anjos',
			role: 'Backend Developer',
			skills: 'Backend, Web development, PHP, Javascript, WordPress',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135823/silva.jpg.webp',
		},
		{
			name: 'Andrei Rodrigues',
			role: 'Backend Developer',
			skills: 'NodeJS, MongoDB, Python, Angular',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210813132744/Andrei_Rodrigues.jpg',
		},
		{
			name: 'Beatriz Souza da Costa',
			role: 'Frontend Developer',
			skills: 'Web Development, Frontend, HTML/CSS, SASS, Javascript',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211207145311/beatriz.jpg',
		},
		{
			name: 'Bruno Cardoso',
			role: 'Frontend Developer',
			skills: 'Frontend, SASS, ReactJS, Javascript, Typescript',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210817203415/bruno_cardoso.jpg',
		},
		{
			name: 'Bruno Dias Josino',
			role: 'QA Tester',
			skills: 'Scrum, Agile, Kanban',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220421143448/bruno_josino.jpg',
		},
		{
			name: 'Cassiano Miranda',
			role: 'Motion Designer',
			skills: 'Motion Graphics Designer, Video Editing, Cameraman',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135826/cassiano.jpg.webp',
		},
		{
			name: 'Douglas Quintiliano dos Santos',
			role: 'DevSecOps Engineer',
			skills:
				'OpenShift V3 / V4, Eks, Aks, Kubernetes, Golang, Python, ShellScript, Linux, Red Hat, AWS, Azure, Haproxy, Ansible, Ansible Tower, APIs, Splunk, Sysdig',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211207152252/douglas_santos.jpg',
		},
		{
			name: 'Elvio Barbosa',
			role: 'Frontend Developer',
			skills: 'Web development, HTML/CSS, Wordpress, Sass, Javascript',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210816164453/Elvio_Barbosa.jpg',
		},
		{
			name: 'Erick Eduardo',
			role: 'Frontend Developer',
			skills: 'Tech Lead Frontend with OmniStack, NextJs and managing product lifecycle process',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210813114211/Erick.jpg',
		},
		{
			name: 'Fábio Ochôa',
			role: 'Creative',
			skills: 'Copywriter, Senior Storyteller, Concept Artist, Illustrator, Creative Planning',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135826/fabio.jpg.webp',
		},
		{
			name: 'Gabriel Fernandes',
			role: 'DesignOps Specialist',
			skills: 'UX Design, UI Design, Art Direction, Branding, Graphic Design',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2020/08/04135829/gabriel.jpg.webp',
		},
		{
			name: 'Gabriel Leandro',
			role: 'Frontend Developer',
			skills: 'Web development, HTML/CSS, SCSS, Animation, Javascript, React, Firebase, Wordpress.',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210813114920/Gabriel-Leandro.jpg',
		},
		{
			name: 'Gabriel Pasche',
			role: 'Backend Developer',
			skills: 'PHP, Dart/Flutter, Node.JS, Vue.Js, HTML, CSS, Javascript, SQL',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221101183233/Gabriel-Pasche.jpg',
		},
		{
			name: 'Gabriel Rodrigues',
			role: 'Designer',
			skills: 'UX Design, UI Design, Art Direction, Branding, Illustration, Graphic Design',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2016/08/04135831/foca.jpg.webp',
		},
		{
			name: 'Gaby Gallo',
			role: 'Product Designer',
			skills: 'Interface/Experience Design, Styleguides & Design System, Componentization, UX Research.',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220222153128/Gaby_Gallo.jpg',
		},
		{
			name: 'Gelton Aureliano',
			role: 'Fullstack Developer',
			skills: 'React, NodeJS, React Native, Firebase, Mongo',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812191835/Gelton.jpg',
		},
		{
			name: 'Giovani Alves',
			role: 'Frontend Developer',
			skills: 'Web Development, HTML/CSS, Javascript, Omnistack, NextJS, Typescript, Styled-components, Firebase',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220217142234/giovani.jpg',
		},
		{
			name: 'Giuliane Oliveira',
			role: 'Frontend Developer',
			skills: 'Web Development, Javascript, HTML/CSS, React, Next.js, Typescript, Unit Tests',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220222153310/Giuliane.jpg',
		},
		{
			name: 'Guilherme Ruann',
			role: 'Frontend Developer',
			skills: 'Frontend, React, NextJS, JavaScript, SASS',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211207144910/Guilherme_Ruann.jpg',
		},
		{
			name: 'Guilherme Trindade',
			role: 'Frontend Developer',
			skills: 'Reactjs, Nextjs, Typescript, HTML, Javascript, SCSS, Styled-components',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211022015042/g_trindade.jpg',
		},
		{
			name: 'Ivanilton Gomes',
			role: 'Backend Developer',
			skills: 'PHP, JavaScript, NodeJS, WordPress',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2021/04/04135821/ivanilton.jpg.webp',
		},
		{
			name: 'João Pedro Oliveira',
			role: 'Full Stack Developer',
			skills: 'ReactJS, NodeJS, Laravel, Typescript, Sass, VueJS.',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211021151223/joao.jpg',
		},
		{
			name: 'Lara Hernandes',
			role: 'Frontend Developer',
			skills: 'HTML, CSS, Javascript, Vue.js, SCSS, React.js, Scrum, Git, Tailwind and Bootstrap',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220809195537/foto_Lara.jpg',
		},
		{
			name: 'Luísa dos Santos',
			role: 'Lead UX Designer',
			skills: 'UX Design, Illustration, Graphic Design',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210827224753/Luisa.jpg',
		},
		{
			name: 'Luiz Henrique Wrubleski',
			role: 'Backend Developer',
			skills: 'Javascript, typescrypt, java, nodejs, mongodb, mysql, postgres, git',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220913190827/luiz_henrique.jpg',
		},
		{
			name: 'Marcelo Zanchet',
			role: 'DevOps Analyst',
			skills: 'Linux, Containerization, Continuous Integration',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220103175634/Marcelo-Zanchet.jpg',
		},
		{
			name: 'Marcos Matos',
			role: 'Backend Developer',
			skills: 'Backend, Wordpress, PHP, Web development and javascript',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220103175150/Marcos_Matos.jpg',
		},
		{
			name: 'Marianna Alves',
			role: 'Frontend Developer',
			skills: 'Web Development, HTML/CSS, Javascript, Sass, ReactJS',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211021151639/marianna.jpg',
		},
		{
			name: 'Mateus Silva',
			role: 'Designer',
			skills: 'UX Design, UI Design, Art Direction, Branding, Graphic Design',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210811221021/Mateus_Silva.jpg',
		},
		{
			name: 'Misael Silva',
			role: 'Backend Developer',
			skills: 'PHP, NodeJs, MySql, MongoDb, ReactJs',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210811211005/Misael-Silva.jpg',
		},
		{
			name: 'Nailan Barbosa',
			role: 'Frontend Developer',
			skills: 'Web and Mobile Dev, Html/Css, JavaScript, React, TypeScript, Wordpress, PHP, Node',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210813113519/Nailan.jpg',
		},
		{
			name: 'Paulo Victor Pereira',
			role: 'Frontend Developer',
			skills: 'HTML/CSS, Javascript, ReactJs, React Native, NextJs',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220613212343/Paulo_victor.jpg',
		},
		{
			name: 'Pedro Cardoso',
			role: 'Backend Developer',
			skills: 'PHP, Laravel, Vuejs, Python, Javascript',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220613211708/Pedro_cardoso.jpg',
		},
		{
			name: 'Pietro Segatto',
			role: 'Lead Creative Designer',
			skills: 'Graphic Design, Art Direction, UX/Ui Design, Branding, Advertising, Creative Planning',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2020/08/04135830/pietro.jpg.webp',
		},
		{
			name: 'Rodrigo Duarte Luz',
			role: 'Frontend Developer',
			skills: 'React, Next, TypeScript, React Native',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220421143033/rodrigo_luz.jpg',
		},
		{
			name: 'Sue Ellen Espitalher',
			role: 'UX/UI Designer',
			skills: 'UI/UX Design, Graphic Design, Illustration, Branding.',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211020211803/sue.jpg',
		},
		{
			name: 'Tauana Macário',
			role: 'Frontend Developer',
			skills: 'HTML, CSS, JavaScript, WordPress',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20230209221445/Tau.jpg',
		},
		{
			name: 'Teo Weber',
			role: 'Frontend Developer',
			skills:
				'Javascript, ReactJS, Node.js, HTML, CSS, Python, Django, Agile, Scrum, Kanban, Jest, React Testing Library, Bootstrap, Ionic, Gatsby',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220613211352/teo.jpg',
		},
		{
			name: 'Thom Morais',
			role: 'Frontend Developer',
			skills: 'Web Development, Html/Css Frontend, JavaScript, React, Angular, Node.js, WordPress',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135822/thom.jpg.webp',
		},
		{
			name: 'Tiago Rodrigues',
			role: 'Designer',
			skills: 'Ux Design, UI Design, Art Direction, Graphic Design',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211209145308/tiago-2.jpg',
		},
		{
			name: 'Victor Freitas',
			role: 'Software Engineer',
			skills:
				'WordPress, Laravel, PHP, JavaScript, TypeScript, Node.js, Next.js, React JS, Redux, Angular, RESTful API, Unit Test, Elasticsearch, MySQL, MongoDB, Nginx, Linux, Python (Basic), Facebook Marketing API',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135822/victor.jpg.webp',
		},
		{
			name: 'Wander Torres Silva',
			role: 'Frontend Developer',
			skills: 'React, React Native, HTML/CSS, Typescript',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220421142023/wander.jpg',
		},
		{
			name: 'Wesley Santos',
			role: 'Frontend Developer',
			skills: 'Web Development, Html/Css Frontend, JavaScript, WordPress',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135822/wesley.jpg.webp',
		},
		{
			name: 'Wesley Silva',
			role: 'Backend Developer',
			skills: 'PHP, Javascript, Laravel, MySql',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211026200456/wes_silva.jpg',
		},
		{
			name: 'Willerson Alves',
			role: 'Frontend Developer',
			skills: 'HTML, CSS, SASS, Javascript, ReactJS',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220217142855/willerson.jpg',
		},
	]

	return (
		<main className={`${S.main} pt-28`}>
			<InternalPageHeading title='um lugar para mudar o seu alcance_mudar com a gente' />

			<div className={`grid grid-cols-2 lg:grid-col-3 2xl:grid-cols-4 gap-8 px-4 mt-16 mb-16 ${S.container}`}>
				{team.map((member) => (
					<TeamCard
						key={member.name}
						name={member.name}
						role={member.role}
						skills={member.skills}
						image={member.image}
					/>
				))}
			</div>
		</main>
	)
}

export default CasesMain
