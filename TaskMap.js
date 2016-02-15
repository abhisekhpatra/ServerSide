

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
function isEven(n) {
  if(n==1)
  return 1;
  else
  return n % 2 ;
}
exports.buildMap=function buildTaskMap(userdetails,taskno)
{
    console.log(userdetails.Username+"------------build task map------------"+taskno);
    //var flag=isEven(count);

    var SubBlockData=[0,1,2,3,4];



    var TaskJson=[];
    var count=1;
    for(i=0;i<1;i++)
    {

console.log('--------taskno-----------'+taskno);

       if(taskno===1)
       {
           shuffle(SubBlockData);

           for(j=0;j<=SubBlockData.length;j++)
           {

              if(SubBlockData[j]==0)
              {
               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Categorical_CalmVsExciting.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==1)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Categorical_PositiveVsNegative.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==2)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Categorical_SeriousVsPlayful.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==3)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Categorical_Trust.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==4)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Categorical_Disturbing.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }

           }
         }
         if(taskno===2)
         {
           shuffle(SubBlockData);
           for(j=0;j<=SubBlockData.length;j++)
           {

              if(SubBlockData[j]==0)
              {
               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Categorical_CalmVsExciting.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==1)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Categorical_PositiveVsNegative.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==2)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Categorical_SeriousVsPlayful.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==3)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Categorical_Trust.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==4)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Categorical_Disturbing.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }

           }
       }

       if(taskno===3)
       {
           shuffle(SubBlockData);

           for(j=0;j<=SubBlockData.length;j++)
           {

              if(SubBlockData[j]==0)
              {
               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Divergent_CalmVsExciting.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==1)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Divergent_PositiveVsNegative.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==2)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Divergent_SeriousVsPlayful.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==3)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Divergent_Trust.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==4)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Divergent_Disturbing.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }

           }
         }
         if(taskno===4)
         {
           shuffle(SubBlockData);
           for(j=0;j<=SubBlockData.length;j++)
           {

              if(SubBlockData[j]==0)
              {
               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Divergent_CalmVsExciting.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==1)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Divergent_PositiveVsNegative.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==2)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Divergent_SeriousVsPlayful.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==3)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Divergent_Trust.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==4)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Divergent_Disturbing.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= count++;
               TaskJson.push(TaskMap);

              }

           }
       }

    }

return TaskJson;
};
