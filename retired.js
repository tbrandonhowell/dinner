// create the array of meals
//                let dinArray = [
                let oldDinArray = [
                    {
                        meal:"meal 0",
                        ingredients:[
                            "meal 0 ingredient 1",
                            "meal 0 ingredient 2",
                            "meal 0 ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 1",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 2",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 3",
                        ingredients:[
                            "meal 3 ingredient 1",
                            "meal 3 ingredient 2",
                            "meal 3 ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 4",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 5",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 6",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 7",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 8",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 9",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 10",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 11",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    },
                    {
                        meal:"meal 12",
                        ingredients:[
                            "meal ingredient 1",
                            "meal ingredient 2",
                            "meal ingredient 3"
                        ]
                    }
                ];



// original way of building out the individual meals
                var ingredientList = document.createElement("ul");
                    ingredientList.style.display = "none";
                    ingredientList.setAttribute("id","list_r"+x);
                    dinArray[x].ingredients.forEach(element => {
                        var newLi = document.createElement("li");
                        newLi.innerText = element;
                        ingredientList.appendChild(newLi);
                    })
                    var newDiv = document.createElement("div");
                    newDiv.setAttribute("class","singleMeal");
                    newDiv.setAttribute("recipe","r"+x);
                    newDiv.innerHTML = '<p class="mealName" recipe="r' + x + '">' + dinArray[x].meal + '</p>'
                    newDiv.appendChild(ingredientList);
                    // after the seventh meal is added to the page, hide the rest via css
                    if (x > 6) {
                        newDiv.style.display = "none";
                    }
                    newDiv.innerHTML += '<p><a>Delete ' + dinArray[x].meal + ' from meals list</a>'
                    document.getElementById("randomMeals").appendChild(newDiv);