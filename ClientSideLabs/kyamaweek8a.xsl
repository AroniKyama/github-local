<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet
	version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
	<html>
		<head>
			<title>Kyama Greetings</title>
		</head>
		<body>
			<h1><xsl:value-of select="greetings/heading"/></h1>
			<p>Greetings in English:<xsl:value-of select="greetings/english"/></p>
			<p>Greetings in Hindi:<xsl:value-of select="greetings/hindi"/></p>
			<p>Greetings in French:<xsl:value-of select="greetings/french"/></p>
			<p>Greetings in German:<xsl:value-of select="greetings/german"/></p>
			<p>Greetings in Spanish:<xsl:value-of select="greetings/spanish"/></p>
		</body>
	</html>
	</xsl:template>
</xsl:stylesheet>