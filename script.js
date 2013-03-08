$(document).ready(function() {

	var newAnswer = function() {
		$(".answer").remove()

		var randomanswer = answers[ Math.floor(Math.random() * answers.length ) ];
		$('#newbicycle').prepend( randomanswer );

		$(this).bind('click', function() {
			newAnswer();
		});
	}

	var answers = [
		'<div class="answer"><h1><a class="reload">HCI theory explains how we think.</a></h1><p>&ldquo;Cognition is a group of mental processes that includes attention, memory, producing and understanding language, learning, reasoning, problem solving, and decision making&rdquo; (<em>Cognition</em>, 2013). Fields in cognition that have played a role in HCI are cognitive psychology, mental models, cognitive modeling, external cognition, and distributed cognition. <a href="cognition.html">read more &raquo;</a></p></div>',
		'<div class="answer"><h1><a class="reload">HCI theory helps us understand the meaning of symbols.</a></h1><p>Semiotics is the study of signs, symbols, and how people interpret them. In this context, &ldquo;signs&rdquo; can be a &ldquo;a direct representation like a photograph, an indicator like smoke is to fire, or merely an arbitrary convention like a word&rdquo;. When considered in the realm of HCI, signs include the buttons, menus, colors and words used in the interface and content. <a href="semiotics.html">read more &raquo;</a></p></div>',
		'<div class="answer"><h1><a class="reload">HCI theory helps us see the big picture.</a></h1><p>Activity Theory is a psychological theory that &ldquo;explains human behavior in terms of our practical activity with the world&rdquo;. It explains cultural practices (e.g., work, school) in the developmental, cultural and historical context in which they occur, by describing them in terms of &lsquo;activities.&rsquo; &rdquo;This theory has been adopted by HCI as a way to help &ldquo;identify tensions between different elements&rdquo; of a system. <a href="activitytheory.html">read more &raquo;</a></p></div>',
		'<div class="answer"><h1><a class="reload">HCI theory helps us understand how people work in groups.</a></h1><p>Social psychology is the study of the behavior of individuals when they are in groups. HCI has adopted social psychology in order to understand and improve how technology is used to support groups. For example, by applying social psychology ideas to HCI, we can learn how to better support distributed groups and how to make traditional, colllocated groups more effective. <a href="socialpsychology.html">read more &raquo;</a></p></div>',
		'<div class="answer"><h1><a class="reload">HCI theory helps us work together using computers.</a></h1><p>Computer-Supported Cooperative Work, or CSCW, combines our understanding of how people work in groups with our understanding of how people work with technology. From group instant messaging conversations to brainstorming using digital whiteboards, CSCW is a broad and challenging field of study. <a href="cscw.html">read more &raquo;</a></p></div>',
		'<div class="answer"><h1><a class="reload">HCI theory helps us look outside conventional thinking.</a></h1><p>&ldquo;Turn to the wild&rdquo; is a contemporary approach to design that is concerned with how people react, change, and integrate technologies that are developed to augment people, places and settings, without necessarily designing them for specific user needs. It is focused on creating and evaluating new technologies in situ, rather than observing existing practices and then suggesting general design implications or system requirements. <a href="wildtheory.html">read more &raquo;</a></p></div>',
		'<div class="answer"><h1><a class="reload">HCI theory helps us clarify our relationship with technology.</a></h1><p>Actor-Network Theory takes the approach of describing both humans and non-humans (such as computers) as &ldquo;equal actors, tied together into networks built and maintained in order to achieve a particular goal, for example the development of a product.&rdquo; (Bruno Latour Major Figure Presentation). With this, it provides a framework and systematic way to consider the infrastructure surrounding technological achievements. <a href="actornetwork.html">read more &raquo;</a></p></div>'
	]

	newAnswer();

});
