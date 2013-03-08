$(document).ready(function() {

	var references = {
		'abrahamsen1': 'Abrahamsen, P., Chen, C., Feng, J., &amp; Manohar, A. (2013). Bruno Latour. In <em>HCDE 501 Winter 2013 Major Figure Presentations</em>. Retrieved from <a class="lock" href="https://catalyst.uw.edu/gopost/conversation/zachry/751156">https://catalyst.uw.edu/gopost/conversation/zachry/751156</a>',
		'abrahamsen2': 'Abrahamsen, P., Goist, Z., &amp; Sparling, J. (2013). Semiotics. In <em>HCDE 501 Winter 2013 Major Figure Presentations</em>. Retrieved from <a class="lock" href="https://catalyst.uw.edu/gopost/conversation/zachry/741724">https://catalyst.uw.edu/gopost/conversation/zachry/741724</a>',
		'addepalli': 'Addepalli, D., Foshee, R., Oldham, S., &amp; Xue, J. (2013). Terry Winograd. In <em>HCDE 501 Winter 2013 Major Figure Presentations</em>. Retrieved from <a class="lock" href="https://catalyst.uw.edu/gopost/conversation/zachry/741744">https://catalyst.uw.edu/gopost/conversation/zachry/741744</a>',
		'bharadwaj': 'Bharadwaj, S., Lee, N., Pledger, L., &amp; V., A. (2013). Susan B&oslash;dker. In <em>HCDE 501 Winter 2013 Major Figure Presentations</em>. Retrieved from <a class="lock" href="https://catalyst.uw.edu/gopost/conversation/zachry/748372">https://catalyst.uw.edu/gopost/conversation/zachry/748372</a>',
		'bowker': 'Bowker, Geoffrey C., and Susan Leigh Star. &ldquo;How things (actor-net) work: Classification, magic and the ubiquity of standards.&rdquo; <em>Philosophia</em> 25.3-4 (1996): 195-220',
		'buxton1': 'Buxton, W. (n.d.). <em>Bill buxton: A personal mantra.</em> Retrieved (March 06, 2013), from <a href="http://billbuxton.com/">http://billbuxton.com/</a>',
		'buxton2': 'Buxton, W. (1994). The three mirrors of interaction: a holistic approach to user interfaces. In L.W. MacDonald &amp; J. Vince (Eds.). <em>Interacting with virtual environments.</em> New York: Wiley.',
		'cognition': 'Cognition. (n.d.). In Wikipedia. Retrieved March 3, 2013, from <a href="http://en.wikipedia.org/wiki/Cognition">http://en.wikipedia.org/wiki/Cognition</a>.',
		'desouza1': 'de Souza, C. S. (2005). <em>The semiotic engineering of human-computer interaction.</em> Cambridge, Mass: MIT Press.',
		'desouza2': 'de Souza, C. S. (2013): Semiotics. In: Soegaard, Mads and Dam, Rikke Friis (eds.). &ldquo;The Encyclopedia of Human-Computer Interaction, 2nd Ed.&rduo;. Aarhus, Denmark: The Interaction Design Foundation. Available online at <a href="http://www.interaction-design.org/encyclopedia/semiotics_and_human-computer_interaction.html"> http://www.interaction-design.org/encyclopedia/semiotics_and_human-computer_interaction.html</a>',
		'easterwoord': 'Easterwood, L., Perez, M., Plank, T., &amp; Ramirez, Z. (2013). Yrj&ouml; Engestr&ouml;m. In <em>HCDE 501 Winter 2013 Major Figure Presentations</em>. Retrieved from <a class="lock" href="https://catalyst.uw.edu/gopost/conversation/zachry/743070">https://catalyst.uw.edu/gopost/conversation/zachry/743070</a>',
		'engestrom': 'Engestrom, Y., &amp; Sannino, A. (February 08, 2010). Studies of expansive learning: Foundations, findings and future challenges. <em>Educational Research Review, 5,</em> 1, 1-24.',
		'feng': 'Feng, Y., Hauser, J., S,. &amp; Warren, S. (2013). Herbert Simon. In <em>HCDE 501 Winter 2013 Major Figure Presentations</em>. Retrieved from <a class="lock" href="https://catalyst.uw.edu/gopost/conversation/zachry/748392">https://catalyst.uw.edu/gopost/conversation/zachry/748392</a>',
		'fresenius': 'Fresenius, M., Goist, Z., Panth, V. &amp; Sharma, R. (2013). In <em>HCDE 501 Winter 2013 Major Figure Presentations</em>. Retrieved from <a class="lock" href="https://catalyst.uw.edu/gopost/conversation/zachry/741782">https://catalyst.uw.edu/gopost/conversation/zachry/741782',
		'greenberg': 'Greenberg, E., Harding, M., Plante, P. &amp; Sparling, J. (2013). Jonathan Grudin. In <em>HCDE 501 Winter 2013 Major Figure Presentations</em>. Retrieved from <a class="lock" href="https://catalyst.uw.edu/gopost/conversation/zachry/744957">https://catalyst.uw.edu/gopost/conversation/zachry/744957</a>',
		'halverson': 'Halverson, C. A. (1994). <em>Distributed cognition as a theoretical framework for HCI: Don&apos;t throw the baby out with the bathwater &ndash; The importance of the cursor in air traffic control</em>. San Diego: University of California, San Diego, Department of Cognitive Science.',
		'hollan': 'Hollan, J., Hutchins, E., &amp; Kirsh, D. (January 01, 2000). Distributed Cognition: Toward a New Foundation for Human-Computer Interaction Research. <em>Acm Transactions on Computer Human Interaction, 7,</em> 174-196.',
		'kaptelinin1': 'Kaptelinin, V. &amp; Nardi, B. A., SIGCHI (Group : U.S.), Association for Computing Machinery (U.S.), &amp; CHI Conference. (2000). <em>Activity theory: Basic concepts and applications</em>. New York, N.Y.: ACM.',
		'kaptelinin2': 'Kaptelinin, V. &amp; Nardi, B. A. (2006). <em>Acting with technology: Activity theory and interaction design</em>. Cambridge, Mass: MIT Press.',
		'kaptelinin3': 'Kaptelinin, V., Nardi, B. A., &amp; Macaulay, C. (July 01, 1999). Methods &amp; tools: The activity checklist: a tool for representing the &ldquo;space&rdquo; of context. <em>Interactions, 6</em>, 4, 27-39.',
		'kaptelinin4': 'Kaptelinin, V. (2013). Activity Theory. In: Soegaard, M. &amp; Dam, R. F.(Eds.), <em>The Encyclopedia of Human-Computer Interaction, 2nd Ed.</em>. Aarhus, Denmark: The Interaction Design Foundation. Available online at <a href="http://www.interaction-design.org/encyclopedia/activity_theory.html">http://www.interaction-design.org/encyclopedia/activity_theory.html</a>',
		'kraut': 'Kraut, R. E. (2003). Applying social psychological theory to the problems of group work. In J. Carroll (Ed.), <em>HCI Models, Theories and Frameworks: Toward A Multidisciplinary Science</em>, (325-356). New Yok: Morgan Kaufman.',
		'larkin': 'Larkin, J. H., &amp; Simon, H. A. (January 03, 1987). Why a Diagram is (Sometimes) Worth Ten Thousand Words. <em>Cognitive Science, 11,</em> 1, 65-100.',
		'latour': 'Latour, B. (1992). Where are the missing masses? The sociology of a few mundane artifacts. In W. E. Bijker &amp; J.Law (Eds.), <em>Shaping technology/building society: Studies in sociotechnical change,</em> (225-258). Cambridge, Mass: MIT Press.',
		'mcgrath': 'McGrath, J. E. (1991). Time, interaction, and performance (TIP): A theory of groups. <em>Small group research, 22,</em> 2, 147-174.',
		'nardi': 'Nardi, B. A. &amp; Kaptelinin, V. (2012). <em>Activity theory in HCI: fundamentals and reflections</em>. San Rafael, Calif. (1537 Fourth Street, San Rafael, CA 94901 USA: Morgan &amp; Claypool.',
		'rogers1': 'Rogers, Y., Rutherford, A., &amp; Bibby, P. A. (1992). <em>Models in the mind: Theory, perspective and application.</em> London: Academic Press.',
		'rogers2': 'Rogers, Y. (2012). <em>HCI theory: Classical, modern, and contemporary</em>. San Rafael, Calif. (1537 Fourth Street, San Rafael, CA 94901 USA: Morgan &amp; Claypool.'
	};

	$("#newbicycle a").each(function() {
		var ref = $(this).attr("data-ref");

		if (ref) {
			$(this).wrap('<div class="parent">');
			var popover = '<div class="popover">' + references[ref] + '</div><div class="popovercorner"></div>'

			$(this).parent().append(popover)
		}
	});
});