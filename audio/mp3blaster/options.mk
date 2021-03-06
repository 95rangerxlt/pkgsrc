# $NetBSD: options.mk,v 1.1 2012/04/14 10:12:01 hans Exp $

PKG_OPTIONS_VAR=        PKG_OPTIONS.mp3blaster
PKG_SUPPORTED_OPTIONS=  esound oss sdl
PKG_SUGGESTED_OPTIONS=  oss

.if ${OPSYS} == "Darwin"
PKG_SUGGESTED_OPTIONS=	sdl
.endif

.include "../../mk/bsd.options.mk"

.if !empty(PKG_OPTIONS:Mesound)
CONFIGURE_ARGS+=        --with-esd=yes
.include "../../audio/esound/buildlink3.mk"
.endif

.if !empty(PKG_OPTIONS:Moss)
CONFIGURE_ARGS+=        --with-oss=yes
.include "../../mk/oss.buildlink3.mk"
.endif

.if !empty(PKG_OPTIONS:Msdl)
CONFIGURE_ARGS+=        --with-sdl=yes
.include "../../devel/SDL/buildlink3.mk"
.endif
