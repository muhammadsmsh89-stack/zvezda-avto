def lum(h):
    h=h.lstrip('#'); r,g,b=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    f=lambda c: c/12.92 if c<=0.03928 else ((c+0.055)/1.055)**2.4
    return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b)
def cr(a,b):
    la,lb=lum(a),lum(b); hi,lo=max(la,lb),min(la,lb)
    return (hi+0.05)/(lo+0.05)
pairs = [
 ("graphite on milk","#221F26","#F6F1EA"),
 ("graphite2 on milk","#55505C","#F6F1EA"),
 ("graphite2b on milk","#4E4954","#F6F1EA"),
 ("plum on milk","#6C4884","#F6F1EA"),
 ("plum-deep on milk","#4C2F63","#F6F1EA"),
 ("graphite on porcelain","#221F26","#FCFAF7"),
 ("graphite2 on porcelain","#55505C","#FCFAF7"),
 ("milk on ink","#F6F1EA","#1E1726"),
 ("lilac on ink","#D9D2E4","#1E1726"),
 ("orchid on ink","#B07FC4","#1E1726"),
 ("orchid-light on ink","#C9A0DA","#1E1726"),
 ("white on plum","#FFFFFF","#6C4884"),
 ("white on plum-deep","#FFFFFF","#4C2F63"),
 ("ink on orchid","#1E1726","#B07FC4"),
 ("plum on lilac-tint","#6C4884","#EFEAF3"),
 ("graphite on lilac-tint","#221F26","#EFEAF3"),
]
for n,a,b in pairs:
    v=cr(a,b)
    tag = "AAA" if v>=7 else ("AA" if v>=4.5 else ("AA-large" if v>=3 else "FAIL"))
    print(f"{n:28s} {a} on {b}  {v:5.2f}  {tag}")
