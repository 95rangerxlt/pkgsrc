# $NetBSD: Makefile,v 1.12 2013/02/09 11:19:10 adam Exp $

PKGNAME=	${DISTNAME:C/-/84-adminpack-/}
COMMENT=	Admin pack module for pgAdmin management

DEPENDS+=	postgresql84-server>=${PKGVERSION_NOREV}:../../databases/postgresql84-server

.include "../../databases/postgresql84/Makefile.common"

BUILD_MAKE_FLAGS=	PGXS=1

BUILD_DIRS=		contrib/adminpack
REQD_DIRS+=		share/doc/postgresql/contrib
REQD_DIRS+=		share/postgresql/contrib

.include "../../databases/postgresql84-client/buildlink3.mk"
.include "../../mk/bsd.pkg.mk"
