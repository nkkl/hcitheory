$(document).ready(function() {
	var answers = [
		'<h1><a href="/">HCI theory explains how we think.</a></h1><p>&ldquo;Cognition is a group of mental processes that includes attention, memory, producing and understanding language, learning, reasoning, problem solving, and decision making&rdquo; (<em>Cognition</em>, 2013). Fields in cognition that have played a role in HCI are cognitive psychology, mental models, cognitive modeling, external cognition, and distributed cognition. <a href="cognition.html">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us understand the meaning of symbols.</a></h1><p>Semiotics is the study of signs, symbols, and how people interpret them. In this context, &ldquo;signs&rdquo; can be a &ldquo;a direct representation like a photograph, an indicator like smoke is to fire, or merely an arbitrary convention like a word [...] When considered in the realm of HCI, signs include the buttons, menus, colors and words used in the interface and content. <a href="semiotics.html">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us see the big picture.</a></h1><p>Activity Theory is a psychological theory that &ldquo;explains human behavior in terms of our practical activity with the world&rdquo;. It explains cultural practices (e.g., work, school) in the developmental, cultural and historical context in which they occur, by describing them in terms of &lsquo;activities.&rsquo; &rdquo;This theory has been adopted by HCI as a way to help &ldquo;identify tensions between different elements&rdquo; of a system. <a href="activitytheory.html">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us understand how people work in groups.</a></h1><p>Social psychology is the study of the behavior of individuals when they are in groups. HCI has adopted social psychology in order to understand and improve how technology is used to support groups. For example, by applying social psychology ideas to HCI, we can learn how to better support distributed groups and how to make traditional, colllocated groups more effective. <a href="socialpsychology.html">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us work together using computers.</a></h1><p>Approach that examines collaboration between a few individuals or a team, or i it can be cooperative work within or between organizations, or it can involve an online community . It also addresses how different technologies influence those activities. <a href="cscw.html">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us look outside conventional thinking.</a></h1><p>Approach to design that is focusing on creating and evaluating new technologies in situ, rather than observing existing practices and then suggesting general design implications or system requirements. Novel technologies are developed to augment people, places and settings, without necessarily designing them for specific user needs. A key concern is how people react, change and integrate these in their everyday lives. <a href="wildtheory.html">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us clarify our relationship with technology.</a></h1><p>Actor-Network Theory is a framework and systematic way to consider the infrastructure surrounding technological achievements. Assigns agency to both human and non-human actors. <a href="actornetwork.html">read more &raquo;</a></p>'
	]
	var randomanswer = answers[ Math.floor(Math.random() * answers.length ) ];

	$('#newbicycle').prepend( randomanswer );
});