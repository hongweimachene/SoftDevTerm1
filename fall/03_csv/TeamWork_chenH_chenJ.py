import random

newFile = open('occupations.csv','r')

#1. Make a dictionary that maps the correct values

percentages= list()
jobs = list()
occupations=dict()
lineRead = 0

for lien in newFile.readlines():
    place = lien.split(', ')
    hold = list()
    desc = ''
    line = list()
    for p in place:
        p = p.split(',')
        for h in p:
            h=h.replace('"','')
            hold.append(h)
    if len(hold) > 2:
        for a in range(len(hold)-1):
            if a < len(hold)-2:
                desc+=hold[a] + ', '
            else:
                desc+=hold[a]
        line.append(desc)
        line.append(hold[len(hold)-1])
    else:
        line.append(hold[0])
        line.append(hold[1])
    if lineRead > 0:
        jobs.append(line[0])
        percentages.append(float(line[1][:-1]))
        occupations[line[0]] = float(line[1][:-1])
    lineRead+=1
newFile.close()
#print(occupations)

#2. Make a function that returns random job where results are weighted by percentage given

stored = 0
intervals = list()
for per in range(len(percentages)-1):
    stored+=percentages[per]
    intervals.append(stored)
def randJob():
    chosen = random.randrange(0,99)
    for inter in range(len(intervals)):
        if chosen <= intervals[inter]:
            return jobs[inter]
print(randJob())
