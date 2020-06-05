# ActivityPeriod 

Activity Period uses Django to create a custom command to show the User's Activity start and end time in Json Format.

The ActivityPeriod has two sub folders ,
1. ActivityPeriod which has mainly settings.py file for settings of the project
2. Useractivity, which has other files to run the required activty

Within Useractivity we have three given URLS:-

1. http://127.0.0.1:8000/Useractivity/  to add details of user which has Real Name, Time Zone and Start time 1, start time2 , start time3, end time 1, end time 2, end time 3 and a button CREATE ,to create the data. 

2. http://127.0.0.1:8000/Useractivity/read to read the filled data in tabular form

3. http://127.0.0.1:8000/Useractivity/Json_data_func to read the data in Json Format


Within Useractivity folder we have management folder which further have commands folder , within this folder we have file named json_data.py which has methods which return data on running the command 
python manage.py jason_data 

in Json Format on the url http://127.0.0.1:8000/Useractivity/json_data which is an API for the data.

The views.py has 4 functions, among which the api() function returns the data from jason_data.py file.

To run the project :- 
 clone it using "git clone https://github.com/Ruchi95Singh/ActivityPeriod.git"
 
 1. Run the command "python manage.py jason_data"
 2. Run the command "python manage.py runserver" 

 Now on browser run the API:-
 
1. http://127.0.0.1:8000/Useractivity/  to add details . 

2. http://127.0.0.1:8000/Useractivity/read to read the filled data in tabular form.

3. http://127.0.0.1:8000/Useractivity/json_data to see the data in json format



