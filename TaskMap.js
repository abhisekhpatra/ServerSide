

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

exports.buildMap=function buildTaskMap(userdetails)
{
    console.log(userdetails);
    var BlockData=[0,1,2,3];
    var SubBlockData=[0,1,2,3,4];
    shuffle(BlockData);

    var TaskJson=[];
    var counter=0;
    for(i=0;i<=BlockData.length;i++)
    {



       if(BlockData[i]==0)
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
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==1)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Categorical_PositiveVsNegative.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==2)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Categorical_SeriousVsPlayful.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==3)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Categorical_Trust.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==4)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Categorical_Disturbing.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }

           }
       }if(BlockData[i]==1)
       {

           shuffle(SubBlockData);
           for(j=0;j<=SubBlockData.length;j++)
           {

              if(SubBlockData[j]==0)
              {

               TaskMap = {} ;
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Divergent_CalmVsExciting.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==1)
              {

               TaskMap = {} ;
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Divergent_PositiveVsNegative.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==2)
              {

               TaskMap = {} ;
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Divergent_SeriousVsPlayful.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==3)
              {

               TaskMap = {} ;
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Divergent_Trust.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==4)
              {

               TaskMap = {} ;
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Bar_Divergent_Disturbing.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }

           }
       }if(BlockData[i]==2)
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
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==1)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Categorical_PositiveVsNegative.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==2)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Categorical_SeriousVsPlayful.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==3)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Categorical_Trust.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);


              }if(SubBlockData[j]==4)
              {

               TaskMap = {};
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Categorical_Disturbing.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);


              }
           }

       }if(BlockData[i]==3)
       {

           shuffle(SubBlockData);
           for(j=0;j<=SubBlockData.length;j++)
           {

              if(SubBlockData[j]==0)
              {

               TaskMap = {} ;
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Divergent_CalmVsExciting.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==1)
              {

               TaskMap = {} ;
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Divergent_PositiveVsNegative.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==2)
              {

               TaskMap = {} ;
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Divergent_SeriousVsPlayful.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==3)
              {

               TaskMap = {} ;
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Divergent_Trust.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }if(SubBlockData[j]==4)
              {

               TaskMap = {} ;
               TaskMap['UserId']= userdetails.UserId;
               TaskMap['Username']= userdetails.Username;
               TaskMap['link']= "Map_Divergent_Disturbing.html";
               TaskMap['taskDone']= "false";
               TaskMap['id']= counter++;
               TaskJson.push(TaskMap);

              }

           }
       }
    }

return TaskJson;
};
