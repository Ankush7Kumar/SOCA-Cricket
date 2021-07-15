import React from 'react';
import classNames from 'classnames';
import { useParams} from 'react-router-dom';
import { SectionTilesProps } from '../utils/SectionProps';
import ListView from '../components/elements/ListView';
import SectionHeader from '../components/sections/partials/SectionHeader';
import Image from './../components/elements/Image';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const TeamList = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
 
  var sectionHeaderTitle = ''
  var sectionHeaderPhotoSrc = ''
  var teamListData = []

  const params = useParams().teamId;





  const teamInfo = [
    {teamN: 'Cambridge CC', playerList: 
    [['Aakib Ansari','All Rounder'],
    ['Abubakar Jogiyat','All Rounder'],
    ['Abubakar Patel','All Rounder'],
    ['Adam Achchha','All Rounder'],
    ['Arif Mamuji','All Rounder'],
    ['Ashraf Mulla (C)','All Rounder'],

    ['Asif Mulla','All Rounder'],
    ['Aslam Dudha','All Rounder'],
    ['Asraf Bodi','All Rounder'],
    ['Dilshad Malik','All Rounder'],
    ['Faizal Hanslod','All Rounder'],
    ['Faizal Mohtat','All Rounder'],

    ['Faruk Darsot','All Rounder'],
    ['Ibhrahim Mayat','All Rounder'],
    ['Ibhrahim Darsot','All Rounder'],
    ['Idri Darsot','Bowler'],
    ['Idris Darsot','All Rounder'],
    ['Imran Patel','All Rounder'],

    ['Ismail Patel','All Rounder'],
    ['Moeen Mulla','All Rounder'],
    ['Mohmadakil Vhora','All Rounder'],
    ['Mohsin Darsot','All Rounder'],
    ['Mohsin L','All Rounder'],
    ['Mohsin Unia','All Rounder'],

    ['Mustahid Mulla','All Rounder'],
    ['Mustahim L','All Rounder'],
    ['Nadeem L','All Rounder'],
    ['Nadeem Manjra','All Rounder'],
    ['Nadeem Manjra','All Rounder'],
    ['Nadim L','All Rounder'],

    ['Sahid Lakhi','All Rounder'],
    ['Said Patel','All Rounder'],
    ['Salim Kazi','All Rounder'],
    ['Sehzad Unia','All Rounder'],
    ['Shehzad L','All Rounder'],
    ['Siraj Mamujee','All Rounder'],

    ['Usman Gani Mulla','Batsman'],
    ['Zaid Patel','All Rounder'],
    ['Zakariya Patel (VC)','All Rounder'],
    ['Zakariya Ravat','All Rounder'],
    ['Zubair Patel','All Rounder'],
  ], teamphoto: 'batball'},



  {teamN: 'Cambridge Rising Stars', playerList: 
    [['Abhishek Patel','All Rounder'],
    ['Anees Bhaiyat','All Rounder'],
    ['Fauzan Bhayat','All Rounder'],
    ['Gulam Mohmed Ravat','All Rounder'],
    ['Javid Unia Nawab','All Rounder'],
    ['Mihir Rao','All Rounder'],

    ['Minjah Abdulhamid','All Rounder'],
    ['Mohammad Koya','All Rounder'],
    ['Mohsin Unia','All Rounder'],
    ['Nadim Manjra','All Rounder'],
    ['Rasid Adat','All Rounder'],
    ['Ravi Kumar','Batsman'],

    ['Rizwan Darsot','All Rounder'],
    ['Rizwan Jogiyat','All Rounder'],
    ['Shakil Bhuria','All Rounder'],
    ['Shehzad Unia (C)','All Rounder'],
    ['Shikar Saxena','All Rounder'],
    ['Sohel Bhaiyat','All Rounder'],

    ['Sufiyan Bhaiyat','All Rounder'],
    ['Wasimakaram Moha Sidat','All Rounder'],
    ['Zaid Patel','All Rounder'],
    ['Zakariya Ravat','Batsman']], teamphoto: 'batball'},


 



    {teamN: 'Grand River CC', playerList: 
    [['Jimmichan Abraham (C)','All Rounder'],
    ['Anand Rajeev Nair (VC)','Batsman'],
    ['Jenik Antony','Bowler'],
    ['Anil Verghese','All Rounder'],
    ['Seemanth Ashok','Bowler'],
    ['Akhil Antony','Batsman'],

    ['Dhanush Raj','All Rounder'],
    ['Vishnu Narayana Kurup','All Rounder'],
    ['Vivek Viswanathan','Batsman'],
    ['Allan Kent Mathew','Batsman'],
    ['Cibin Jacob','Bowler'],
    ['Jugeesh Shaju','Bowler'],

    ['Bibin Sunny','Bowler'],
    ['Sreerag AS','Bowler'],
    ['Derin Thambi','All Rounder'],
    ['Pravindas Appu','Batsman'],
    ['Midhun K','Batsman'],
    ['Jeslin James','All Rounder'],

    ['Rajkrishnan Nair','All Rounder']], teamphoto: 'batball'},




    {teamN: 'Kitchener Wolves', playerList: 
    [['Nirmal Ignacy (C)','All Rounder'],
    ['Hemanth Ponnapalli (VC)','All Rounder'],
    ['Karthik Vuduthala','All Rounder'],
    ['Anil Chada','All Rounder'],
    ['Sai Teja','All Rounder'],
    ['Ravi Varma','All Rounder'],

    ['Arjun A','All Rounder'],
    ['Sandeep Bala','All Rounder'],
    ['Andrew Terry','All Rounder'],
    ['Abdul Ghory','All Rounder'],
    ['Neeraj Nair','All Rounder'],
    ['Pradeep Maddhi','All Rounder'],

    ['Akshay Mysa','All Rounder'],
    ['Santosh Naidu','All Rounder'],
    ['Pavan Chowdary','All Rounder'],
    ['Varshith Kumar','All Rounder'],
    ['Rakesh Reddy','All Rounder'],
    ['Athinder Singh','All Rounder']], teamphoto: 'batball'},




    {teamN: 'KW Kings XI', playerList: 
    [['Abdullah Agib','All Rounder'],
    ['Abdur Agib','All Rounder'],
    ['Adeel Akhtar','All Rounder'],
    ['Adnan Azam','All Rounder'],
    ['Anirudh Puri (VC)','All Rounder'],
    ['Aviraj Singh','Batsman'],

    ['Gagan Battoo','All Rounder'],
    ['Ishaan Dhaliwal','Batsman'],
    ['Jasmeet Singh','Batsman'],
    ['Jatin Gulati','Batsman'],
    ['Jimmy Abraham','All Rounder'],
    ['Kanav Patwa','All Rounder'],

    ['Lomesh Patel (WK)','Batsman'],
    ['Manpreet Singh','All Rounder'],
    ['Nadeem Sheikh','All Rounder'],
    ['Nisarg Shah','All Rounder'],
    ['Puran Singh','All Rounder'],
    ['Pushpkaran Singh','All Rounder'],

    ['Ramink Brar','All Rounder'],
    ['Ramiz Heidary','All Rounder'],
    ['Randhir Dhaliwal','All Rounder'],
    ['Riten Patwa (C)','All Rounder']], teamphoto: 'batball'},






    {teamN: 'Proteas CC', playerList: 
    [['Abhishek Ramparia','All Rounder'],
    ['Ankit Bhatt','All Rounder'],
    ['Ashutosh Vyas','All Rounder'],
    ['Ayaz Belim  (C)','All Rounder'],
    ['Denil Chowdhary','All Rounder'],
    ['Devang Patel','All Rounder'],

    ['Dhruv Sonavane','All Rounder'],
    ['Dhruvil Prajapati','All Rounder'],
    ['Jinil Patel (WK)','Batsman'],
    ['Kashyap Dave','Batsman'],
    ['Kaushal Pandya','All Rounder'],
    ['Khush Patel','All Rounder'],

    ['Navin Anson','All Rounder'],
    ['Niravkumar Patel','All Rounder'],
    ['Nirmal Dave','Batsman'],
    ['Parshwa Shah','All Rounder'],
    ['Pragnesh Panchal ','All Rounder'],
    ['Premal Parekh (WK)','Batsman'],

    ['Pringal Patel','All Rounder'],
    ['Purvish Jethva','All Rounder'],
    ['Rehan Khan ','All Rounder'],
    ['Sachin Desai ','All Rounder'],
    ['Smit Patel ','Batsman'],
    ['Sulaiman Choudhree ','All Rounder'],

    ['Urvil Patel','All Rounder']], teamphoto: 'batball'},








    {teamN: 'Sunrise CC', playerList: 
    [['Aarya Katariya','All Rounder'],
    ['Abhay Patel ','All Rounder'],
    ['Abhishek Lastname','All Rounder'],
    ['Amandeep Singh','All Rounder'],
    ['Ashan Qazi ','All Rounder'],
    ['Bahdur Mangat ','All Rounder'],

    ['Daljeet Mangat','All Rounder'],
    ['Dean Fernandes ','All Rounder'],
    ['Deepinder Pal Singh (VC)','All Rounder'],
    ['Gurpreet Sandhu','Batsman'],
    ['Harjeevan Singh','All Rounder'],
    ['Harneet Singh','Batsman'],
    
    ['Harpal Singh ','All Rounder'],
    ['Inderjeet Singh','All Rounder'],
    ['Jaskirat Singh (C)','All Rounder'],
    ['Kuldeep Dhaliwal ','All Rounder'],
    ['Neeraj Bharatwaj ','All Rounder'],
    ['Preet Mohinder','All Rounder'],

    ['Rahul Adav','Batsman'],
    ['Rajat Grover ','Batsman'],
    ['Rohit Kori','All Rounder'],
    ['Sajeet Mangat ','All Rounder'],
    ['Sandeep Buttar','All Rounder'],
    ['Saurabh Sharma','Batsman'],

    ['Siddharth Thakore','All Rounder'],
    ['Sunny Bhullar ','All Rounder'],
    ['Tahir Khan','All Rounder'],
    ['Vijay Subramanya','All Rounder']], teamphoto: 'sunrisephoto'},














    {teamN: 'University of Waterloo', playerList: 
    [['Ahsan Shahid','All Rounder'],
    ['Dhruv Patel ','All Rounder'],
    ['Fawaz Hakim','All Rounder'],
    ['Kush Patel','All Rounder'],
    ['Mohsin Tahir ','All Rounder'],
    ['Paramvir Singh (WK)','Batsman'],

    ['Pranav Kapoor ','All Rounder'],
    ['Pranav Mehta (VC/WK)','Batsman'],
    ['Shankha Chatterjee ','All Rounder'],
    ['Shivam Sharaf ','All Rounder'],
    ['Siddhant Goyal (C)','All Rounder'],
    ['Tushar Chopra ','Batsman'],

    ['Vedant Kulkarni ','Batsman'],
    ['Yash Shah','All Rounder']], teamphoto: 'batball'},







    {teamN: 'Cambridge United', playerList:
    [['Suhel Pir (C)','All Rounder'],
    ['Sadik Manjra','All Rounder'],
    ['Anwar China','All Rounder'],
    ['Shakil Patel (VC)','All Rounder'],
    ['Maulik Patel','All Rounder'],
    ['Sajid Pir','All Rounder'],
    ['Abdul Samad Kazi','All Rounder'],
    ['Husen Dukanwala','All Rounder'],
    ['Ashraf Topia','All Rounder'],
    ['Altaf Nav','All Rounder'],
    ['Muhammad Gori','All Rounder'],
    ['Sohel Baka','All Rounder'],
    ['Yusuf Momla','All Rounder'],
    ['Suleman Manjra','All Rounder'],
    ['Faiyaz Jangda','All Rounder'],
    ['Ahmed Patel','All Rounder'],
    ['Ismail Kazi','All Rounder']], teamphoto: 'batball'},














    {teamN: 'Huskies Cricket', playerList: 
    [['Dhruv Panghal','Batsman'],
    ['Ankush Kumar (WK)','Batsman'],
    ['Abdul Rehman Naeem (C)','Batsman'],
    ['Sannan Mansoor','Batsman'],
    ['Talha Naeem','Batsman'],
    ['Taha Imam','All Rounder'],
    ['Hamza Hamid','All Rounder'],
    ['Muhammad Ghyour Ali (VC)','All Rounder'],
    ['Saad Rehman','Batsman'],
    ['Saim Ahmad','Bowler'],
    ['Arsalan Wasi','All Rounder'],
    ['Lucas Sakinofsky','All Rounder'],
    ['Owais Hamid','All Rounder'],
    ['Taha Hamid','All Rounder'],
    ['Osama Hamid','All Rounder'],
    ['Ahmed Imtiaz','All Rounder'],
    ['Gundeep Singh','Bowler'],
    ['Sayeed Hassan','All Rounder'],
    ['Abdul Hafeez Naeem','Batsman'],
    ['Hrishi Modi (WK)','Batsman']], teamphoto: 'huskiescricket'},
    


   {teamN: 'Kitchener Raptors', playerList:
    [['Mankaran (VC)','All Rounder'],
    ['Bikram (C)','All Rounder'],
    ['Ayaz','Batsman'],
    ['Manpreet','Bowler'],
    ['Avi','Batsman'],
    ['Akash','Bowler'],
    ['Tani','All Rounder'],
    ['Ishdeep (WK)','Batsman'],
    ['Karan','Batsman'],
    ['Harish','Bowler'],
    ['Pawan','All Rounder'],
    ['Gurpreet','All Rounder'],
    ['Zubin','Bowler'],
    ['Maaz','Batsman'],
    ['Mohit','Batsman']], teamphoto: 'batball'},



    {teamN: 'Sunrise Stallions CC', playerList:
    [['Abubaker Kalair','All Rounder'],
    ['Ali Nabeel','All Rounder'],
    ['Amit Sharma','All Rounder'],
    ['Avi Kalsotra','All Rounder'],
    ['Hari Krithivasan','All Rounder'],
    ['Haril Majmundar ','All Rounder'],

    ['Hiren Patel (VC)','All Rounder'],
    ['Hussain Akbar','All Rounder'],
    ['Hussain Shah ','All Rounder'],
    ['Jasneet Singh Arora','All Rounder'],
    ['Jimmy Nabeel','All Rounder'],
    ['Majed Khan (C)','All Rounder'],

    ['Mayur Navale','Bowler'],
    ['Robby Sharma','All Rounder'],
    ['Sandeep Singh Buttar','Batsman'],
    ['Sanjay Sharma','All Rounder'],
    ['Shiva Sharma','Batsman'],
    ['Shourya Shetty ','All Rounder'],

    ['Srujan Marka','All Rounder'],
    ['Suryanchal Kishore','All Rounder'],

    
    ['Vaibhav Shetty','All Rounder']], teamphoto: 'sunrisephoto'},









    {teamN: 'Victoria CC', playerList:
    [['Arjun Mony (C)','All Rounder'],
    ['Chandru Muthukumarvel (VC)','All Rounder'],
    ['Jeevan Joseph','All Rounder'],
    ['Samundiswaran Velpandian','All Rounder'],
    ['Kiran sundaravarathan','All Rounder'],
    ['Bhalaji Sadagoparamanujam','All Rounder'],

    ['Balamurugan Sakthivel','All Rounder'],
    ['Joshwa Joseph Britto','All Rounder'],
    ['Subhani Shaik','All Rounder'],
    ['Sharad Jajoo','All Rounder'],
    ['Phillip Whyne','All Rounder'],
    ['Karthikeyan Munuswamy','All Rounder'],

    ['Sivanandan Vijayakumar','All Rounder'],
    ['Jai ganesh Sundaram','All Rounder'],
    ['Ravi Bhadresa','All Rounder'],
    ['Krunal Bhadresa','All Rounder'],
    ['Rathish Ravi','All Rounder'],
    ['Hemnath Baskaran','All Rounder'],

    ['Ramesh Somasundaram','All Rounder'],
    ['Sivaramakrishnan Rathinam','All Rounder'],
    ['Ponnar krishnasamy','All Rounder']], teamphoto: 'batball'},









    {teamN: 'Waterloo Gladiators', playerList:
    [['Hamza Mirza (C)','Bowler'],
    ['Abdullah Khalid (VC/Wk)','Batsman'],
    ['Abhiraam Biju','Bowler'],
    ['Ahsan Shahid','Batsman'],
    ['Hussain Akhbar','Batsman'],
    ['Hamza Yousafzai','All Rounder'],

    ['Talha Yousafzai','All Rounder'],
    ['Mohammad Adnan','Batsman'],
    ['Umar Manzar ','Batsman'],
    ['Naveed Iqbal Tareen','All Rounder'],
    ['Haris Bhatti','All Rounder'],
    ['Talha Ashfaq','Bowler'],

    ['Sorabh Arora','Bowler'],
    ['Jass Bajwa','Bowler'],
    ['Mainul Raiyan Haque','All Rounder'],
    ['Ahsan Imam','Bowler'],
    ['Rai Mohammad Ali','Bowler'],
    ['Rai Umar','Batsman'],

    ['Saad Qazi','All Rounder'],
    ['Hamza Abid','Bowler'],
    ['Paramveer Singh','All Rounder'],
    ['Harwaris Gill','Batsman'],
    ['Naveed Khan','All Rounder'],
    ['Gurjit Singh Saini','All Rounder'],

    ['Mayank Kanoria','All Rounder'],
    ['Aadit Mehrotra','Bowler'],
    ['Viraj Uberoi','Batsman'],
    ['Sachin Vashista','All Rounder'],
    ['Raveepaul Singh','All Rounder'],
    ['Neeraj Bhatia','All Rounder'],


    ['Nikhil Ratesar','All Rounder'],
    ['Vikas Tomar','All Rounder'],
    ['Nishant Vasudev','All Rounder'],
    ['Arkadeep Das','All Rounder']], teamphoto: 'batball'},












   {teamN: 'Young 11', playerList:
   [['Ahmed Shaikh','Batsman'],
   ['Ashrey Krovi','All Rounder'],
   ['Bhuvan Kilaru ','All Rounder'],
   ['Dinesh Tirumallsetty','Batsman'],
   ['Hemant Kumar','All Rounder'],
   ['Himavanth Reddy ','Batsman'],


   ['Jay Patel','All Rounder'],
   ['Krishna Chaitanya Nimmala','Batsman'],
   ['Mailik Patel ','All Rounder'],
   ['Navpreet Singh ','All Rounder'],
   ['Nikhil Nisangi ','All Rounder'],
   ['Nitish Meelu','All Rounder'],

   ['Parth Thakkar (C)','All Rounder'],
   ['Pradeep Maddi ','Batsman'],
   ['Ranvir Lastname ','All Rounder'],
   ['Sai Ram Marri (VC)','All Rounder'],
   ['Shikar Lastname','All Rounder'],
   ['Siddharth Patel ','Batsman'],


   ['Sunil Kumar Kambhampati','All Rounder'],
   ['Vatsal P. Patel ','All Rounder'],
   ['Vineeth Nallmadugu','Batsman']], teamphoto: 'batball'},







   {teamN: 'ZMCC Kitchener', playerList:
    [['Abdul Jabbar','All Rounder'],
    ['Abhimanyu Katey','All Rounder'],
    ['Hamza Talaal','All Rounder'],
    ['Hasanain A','All Rounder'],
    ['Hasnain Aamir','All Rounder'],
    ['Imran Kashif ','All Rounder'],


    ['Khalid Gillani ','All Rounder'],
    ['Liaqat Ali ','All Rounder'],
    ['Mehmood Pirzada','All Rounder'],
    ['Mohammad Adil','All Rounder'],
    ['Mohsan Butt','All Rounder'],
    ['Nasir Janjua','All Rounder'],
    

    ['Naveed Jailani (C)','All Rounder'],
    ['Navjeet Singh','All Rounder'],
    ['Owais Asghar','All Rounder'],
    ['Sajid Gilani ','Batsman'],
    ['Samir Ajmal','All Rounder'],
    ['Shariq Mohammad ','All Rounder'],
    

    ['Sunit Thakur ','All Rounder'],
    ['Taha Badar (VC)','All Rounder'],
    ['Tariq Yousaf ','All Rounder'],
    ['Vicky Sharma','All Rounder'],
    ['Zaki Khan','All Rounder']], teamphoto: 'batball'}







    
  ]



  for (var i = 0; i < teamInfo.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    if(params == teamInfo[i].teamN.replace(/\s/g, '')){
      teamListData = teamInfo[i].playerList
      sectionHeaderTitle = teamInfo[i].teamN
      sectionHeaderPhotoSrc = teamInfo[i].teamphoto;
    }
}





  const outerClasses = classNames(
    'teams section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'teams-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );


  const sectionHeader = {
    title: sectionHeaderTitle,
  };


  var rows = [];
for (var i = 0; i < teamListData.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ListView name={teamListData[i][0]} role={teamListData[i][1]} />);
}
  return (
    <section
      {...props}
      className={outerClasses}
    >


<SectionHeader data={sectionHeader} className="center-content"  data-reveal-delay="200"/>

      <div className="container">
        <div className={innerClasses}>
          <div className="pb-100 container-sm hero-figure reveal-from-bottom illustration-element-01 " data-reveal-value="20px" data-reveal-delay="200">
            <Image
                className="has-shadow"
                src={require('./../assets/images/' + sectionHeaderPhotoSrc.toString() + '.jpg')}
                alt="Photo not found"
                width={896}
                height={504} />

          </div>
          <div >
    
        {rows}
          </div>
        </div>
      </div>
    </section>
  );
}

TeamList.propTypes = propTypes;
TeamList.defaultProps = defaultProps;

export default TeamList;