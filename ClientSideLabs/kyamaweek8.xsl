<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet
	version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<title>Kyama TO-DO List</title>
			</head>
			<body>
				<h1><xsl:value-of select="note/heading"/></h1>
				<xsl:for-each select="note/tasks/todo">
					<p><xsl:value-of select="text()"/></p>
					</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>