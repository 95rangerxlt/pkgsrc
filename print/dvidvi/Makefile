# $NetBSD: Makefile,v 1.12 2012/10/08 13:45:36 asau Exp $
#

DISTNAME=	dvidvi-1.0
CATEGORIES=	print
MASTER_SITES=	ftp://sunsite.univie.ac.at/pub/distfiles/

MAINTAINER=	pkgsrc-users@NetBSD.org
COMMENT=	Select and/or rearrange pages in a TeX dvi file

RESTRICTED=	Unable to determine distribution license
NO_SRC_ON_FTP=	${RESTRICTED}
NO_SRC_ON_CDROM=${RESTRICTED}
NO_BIN_ON_FTP=	${RESTRICTED}
NO_BIN_ON_CDROM=${RESTRICTED}

INSTALLATION_DIRS=	bin ${PKGMANDIR}/man1

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/dvidvi ${DESTDIR}${PREFIX}/bin/dvidvi
	${INSTALL_MAN} ${WRKSRC}/dvidvi.1 ${DESTDIR}${PREFIX}/${PKGMANDIR}/man1/dvidvi.1

.include "../../mk/bsd.pkg.mk"
