$(document).ready(function() {
	var answers = [
		'<h1><a href="/">HCI theory explains how we think.</a></h1><p>&ldquo;Cognition is a group of mental processes that includes attention, memory, producing and understanding language, learning, reasoning, problem solving, and decision making&rdquo; (<em>Cognition</em>, 2013). Fields in cognition that have played a role in HCI are cognitive psychology, mental models, cognitive modeling, external cognition, and distributed cognition. <a href="cognition.html">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us understand the meaning of symbols.</a></h1><p>I\'m the Batman. Thwok wallop pow koom zoink twak pok zoink smack zap crack pop zzzip. Thwok bwom vrooaaaa bam pow screeeeam kaboom vroom zap snap twak. Crackle whack boom zap wham tonk wallop bwom whack blam gadzooks. Kerplunk screeeeam koom tonk zap crash bwom screeeeam zzzip bam vroom smack pow. Vroom whack wallop crash kerplunk bwom twak pow bwom crash! <a href="">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us see the big picture.</a></h1><p>I\'m the Batman. Thwok wallop pow koom zoink twak pok zoink smack zap crack pop zzzip. Thwok bwom vrooaaaa bam pow screeeeam kaboom vroom zap snap twak. Crackle whack boom zap wham tonk wallop bwom whack blam gadzooks. Kerplunk screeeeam koom tonk zap crash bwom screeeeam zzzip bam vroom smack pow. Vroom whack wallop crash kerplunk bwom twak pow bwom crash! <a href="">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us understand how people work in groups.</a></h1><p>I\'m the Batman. Thwok wallop pow koom zoink twak pok zoink smack zap crack pop zzzip. Thwok bwom vrooaaaa bam pow screeeeam kaboom vroom zap snap twak. Crackle whack boom zap wham tonk wallop bwom whack blam gadzooks. Kerplunk screeeeam koom tonk zap crash bwom screeeeam zzzip bam vroom smack pow. Vroom whack wallop crash kerplunk bwom twak pow bwom crash! <a href="">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us work together using computers.</a></h1><p>I\'m the Batman. Thwok wallop pow koom zoink twak pok zoink smack zap crack pop zzzip. Thwok bwom vrooaaaa bam pow screeeeam kaboom vroom zap snap twak. Crackle whack boom zap wham tonk wallop bwom whack blam gadzooks. Kerplunk screeeeam koom tonk zap crash bwom screeeeam zzzip bam vroom smack pow. Vroom whack wallop crash kerplunk bwom twak pow bwom crash! <a href="">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us turn to the wild?</a></h1><p>I\'m the Batman. Thwok wallop pow koom zoink twak pok zoink smack zap crack pop zzzip. Thwok bwom vrooaaaa bam pow screeeeam kaboom vroom zap snap twak. Crackle whack boom zap wham tonk wallop bwom whack blam gadzooks. Kerplunk screeeeam koom tonk zap crash bwom screeeeam zzzip bam vroom smack pow. Vroom whack wallop crash kerplunk bwom twak pow bwom crash! <a href="">read more &raquo;</a></p>',
		'<h1><a href="/">HCI theory helps us actor-network theory something?</a></h1><p>I\'m the Batman. Thwok wallop pow koom zoink twak pok zoink smack zap crack pop zzzip. Thwok bwom vrooaaaa bam pow screeeeam kaboom vroom zap snap twak. Crackle whack boom zap wham tonk wallop bwom whack blam gadzooks. Kerplunk screeeeam koom tonk zap crash bwom screeeeam zzzip bam vroom smack pow. Vroom whack wallop crash kerplunk bwom twak pow bwom crash! <a href="">read more &raquo;</a></p>'
	]
	var randomanswer = answers[ Math.floor(Math.random() * answers.length ) ];

	$('#newbicycle').prepend( randomanswer );
});