.c.o:
	${CC} ${CFLAGS} -DUNIX -c $<

all:          unarj

unarj.o:    unarj.c   unarj.h

environ.o:  environ.c unarj.h

decode.o:   decode.c  unarj.h

sanitize.o: sanitize.c unarj.h

OBJS = unarj.o decode.o environ.o sanitize.o

unarj: $(OBJS)
	$(CC) $(LDFLAGS) $(OBJS) -o unarj

clean:
	-rm -f $(OBJS) unarj
