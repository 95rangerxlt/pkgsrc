$NetBSD: patch-mozilla_toolkit_components_osfile_modules_osfile__unix__front.jsm,v 1.1 2013/11/08 12:55:52 ryoon Exp $

--- mozilla/toolkit/components/osfile/modules/osfile_unix_front.jsm.orig	2013-10-29 01:21:11.000000000 +0000
+++ mozilla/toolkit/components/osfile/modules/osfile_unix_front.jsm
@@ -734,7 +734,7 @@
      File.Info = function Info(stat) {
        let isDir = (stat.st_mode & OS.Constants.libc.S_IFMT) == OS.Constants.libc.S_IFDIR;
        let isSymLink = (stat.st_mode & OS.Constants.libc.S_IFMT) == OS.Constants.libc.S_IFLNK;
-       let size = exports.OS.Shared.Type.size_t.importFromC(stat.st_size);
+       let size = exports.OS.Shared.Type.off_t.importFromC(stat.st_size);
 
        let lastAccessDate = new Date(stat.st_atime * 1000);
        let lastModificationDate = new Date(stat.st_mtime * 1000);
