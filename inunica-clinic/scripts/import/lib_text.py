# -*- coding: utf-8 -*-
"""Общие утилиты разбора Tilda-страниц. Только стандартная библиотека."""
import re, html

def strip_tags(s):
    s = re.sub(r'(?is)<(script|style|noscript)\b.*?</\1>', ' ', s)
    s = re.sub(r'(?is)<br\s*/?>', '\n', s)
    s = re.sub(r'(?is)</(p|div|li|h[1-6]|tr|td)>', '\n', s)
    s = re.sub(r'(?is)<[^>]+>', ' ', s)
    s = html.unescape(s)
    s = re.sub(r'[ \t\xa0]+', ' ', s)
    s = re.sub(r'\n[ \t]*', '\n', s)
    s = re.sub(r'\n{2,}', '\n', s)
    return s.strip()

def body(s):
    m = re.search(r'(?is)<body[^>]*>(.*)</body>', s)
    return m.group(1) if m else s
