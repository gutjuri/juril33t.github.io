---
layout: post
title: Datenerhebung und Visualisierung im Ulmer Freifunknetz
tags: [freifunk, ulm]
---

# Motivation

Schon seit längerer Zeit wollte ich zu Übungszwecken ein Projekt durchführen, dass sich mit dem Themenfeldern "Big Data", "Data Science" und Datenvisualisierung befasst. Aufgrund von Ideenmangel begann ich dieses erst vor circa einem halben Jahr, im August 2018. Die Idee: Mittracken, wieviele Personen zu jeder Stunde des Tages über den Freifunk Knotenpunkt im Jugendhaus Blaubeuren online gehen. Grund für mein Interesse an diesen Daten ist, dass ich diesen Knotenpunkt selbst vor einigen Jahren installiert habe und es mich interessiert, ob dieser auch genutzt wird. 

# Datensammlung

Das Freifunknetz Ulm stellt eine öffentliche API bereit, über die man Daten über die verfügbaren Knotenpunkte abrufen kann. Da ich mir nicht sicher bin, ob es von den Verantwortlichen gewollt ist, dass die URL dieser API veröffentlicht wird, werde ich sie hier nicht nennen. Es hat mich jedenfalls einige Zeit gekostet, sie zu finden. 
Diese API ermöglicht das Abrufen vieler Informationen über die einzelnen Nodes: Standort, Firmware Version, Anzahl der erbundenen Clients, etc. Im Rahmen dieses Projektes bin ich aber lediglich an der Anzahl der verbundenen Clients interessiert.
Ein kurzes geschriebenes Ruby-Skript, das auf meinem Raspberry Pi stündlich ausgeführt wird, archiviert diese Daten und ermöglicht es mir jetzt, mehrere Monate später, diese zu analysieren. Bis zum heutigen Tag wurde die API über 5000 Mal bemüht, was eine Ausbeute von knapp 30 Megabyte Nutzdaten ergeben hat.

# Datenanalyse

Zur Analyse der gesammelten Daten verwende ich die Programmiersprache [Julia](https://julialang.org/). Grund dafür ist, dass ich diese sowieso lernen wollte. Außerdem eignet sich Julia aufgrund seiner im Vergleich zu anderen hohen Programmiersprachen enormen Performanz für die Analyse von großen Datenmengen. Auch das Erzeugen von Plots ist in Julia mit sehr wenig Aufwand machbar. Der Quelltext für das Programm, das die gesammelten Daten in visuelle Form bringt, ist [hier](https://github.com/juril33t/ff-stats/blob/gh-pages/ffanalyse.jl) einsehbar. Ich bin mit der Performanz dieses Skriptes sehr zufrieden, jedoch sind die von mir gesammelten Datenmengen auch nicht so groß, dass lange Wartezeiten zu befürchten gewesen wären.

# Ergebnisse

Die Ergebnisse des Projektes sind [hier](../../../ff-stats/index.html) einsehbar. 
Ich werde in den nächsten Tagen einen Automatisierungsmechanismus schreiben, der die auf dieser Seite gezeigten Plots regelmäßig mit neuen Daten aktualisiert.
