JPG_FILES=$(wildcard img/*.jpg)
WEBP_FILES=$(JPG_FILES:img/%.jpg=img/%.webp)

.jpg.webp :
	cwebp -q 25 $< -o $@

all :: $(WEBP_FILES)

.SUFFIXES: .webp .jpg
.PHONY: all
