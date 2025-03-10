from json import loads,dumps

with open('db.json','r') as file:
    data = loads(file.read())
    for topics in list(data.keys()):
        id_=1
        for question in data[topics]:
            question.update({'id':id_})
            id_+=1
with open('db_new.json','w') as file_new:
    file_new.write(dumps(data))
