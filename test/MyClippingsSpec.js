var myClippingsExcerpt = `
Outliers: The Story of Success (Gladwell, Malcolm)
- Tu subrayado en la posición 3116-3117 | Añadido el jueves, 1 de octubre de 2015 20:05:20

upon my great-great-great-grandmother with desire at a slave market in Alligator Pond and purchased her.
==========
The Running Revolution: How to Run Faster, Farther, and Injury-Free--for Life (Romanov, Nicholas;Brungardt, Kurt)
- Tu marcador en la posición 1060 | Añadido el jueves, 1 de octubre de 2015 23:50:51


==========
The Running Revolution: How to Run Faster, Farther, and Injury-Free--for Life (Romanov, Nicholas;Brungardt, Kurt)
- Tu subrayado en la posición 1245-1246 | Añadido el sábado, 3 de octubre de 2015 11:44:49

The running Pose is one of the three invariable elements of running—the foundational elements that every human body passes through when running. These elements are the running Pose, falling, and pulling.
==========
The Running Revolution: How to Run Faster, Farther, and Injury-Free--for Life (Romanov, Nicholas;Brungardt, Kurt)
- Tu subrayado en la posición 1257-1257 | Añadido el sábado, 3 de octubre de 2015 11:46:54

load created by the speed of your running, meets the ground.
==========
`

define(['underscore', 'myClippings'], (_, clippings) => {

	describe('parse', function() {
		it('should recognize 4 clippings', function() {
			expect(clippings.extract(myClippingsExcerpt).length).toBe(4);
		});
		it('should have property book', function() {
			firstOne = clippings.extract(myClippingsExcerpt)[0]
			expect(firstOne.book).toContain('Outliers');
		});
		it('should have property book', function() {
			firstOne = clippings.extract(myClippingsExcerpt)[0]
			expect(firstOne.book).not.toContain('upon');
		});
		it('should have property clipping', function() {
			firstOne = clippings.extract(myClippingsExcerpt)[0]
			expect(firstOne.clipping).toContain('upon');
			expect(firstOne.clipping).toContain('purchased her');
		});
		it('should have kind subrayado', function() {
			firstOne = clippings.extract(myClippingsExcerpt)[0]
			expect(firstOne.kind).toContain('subrayado');
		});
		it('should have position', function() {
			firstOne = clippings.extract(myClippingsExcerpt)[0]
			expect(firstOne.position).toContain('3116-3117');
		});
		it('should have date', function() {
			firstOne = clippings.extract(myClippingsExcerpt)[0]
			expect(firstOne.date).toContain('2015 20:05');
		});
		it('should have kind marcador', function() {
			element = clippings.extract(myClippingsExcerpt)[1]
			expect(element.kind).toContain('marcador');
		});
		it('should have single number position', function() {
			element = clippings.extract(myClippingsExcerpt)[1]
			expect(element.position).toContain(1060);
		});
	});
});

