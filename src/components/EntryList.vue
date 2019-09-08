<template>
  <v-row dense>
    <v-col cols="12">
      <div v-for="(workout, index) in workouts" :key="index">
        <v-subheader>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</v-subheader>
        <v-card class="mx-auto mb-1" max-width="344" outlined>
          <v-list-item two-line>
            <v-list-item-content>
              <div class="overline mb-1"></div>
              <v-list-item-title class="headline mb-1">{{ workout.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ workout.excercises.length }} excercises</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(excercise, index) in workout.excercises" :key="index">
              <v-expansion-panel-header>{{ excercise.name }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table class="text-center" dense>
                  <thead>
                    <tr>
                      <th class="text-center">Set</th>
                      <th class="text-center">Reps</th>
                      <th class="text-center">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(set, index) in excercise.sets" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ set.reps }}</td>
                      <td>{{ set.weight }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'EntryList',
  data: function() {
    return {
      workouts: [
        {
          date: Date(),
          name: 'Back and Biceps',
          count: 10,
          excercises: [
            {
              name: 'Barbell Rows',
              sets: [
                {
                  weight: 225,
                  reps: 10
                },
                {
                  weight: 225,
                  reps: 10
                },
                {
                  weight: 225,
                  reps: 10
                }
              ]
            },
            {
              name: 'Lat Pulldowns',
              sets: [
                {
                  weight: 180,
                  reps: 8
                },
                {
                  weight: 180,
                  reps: 6
                },
                {
                  weight: 180,
                  reps: 5
                }
              ]
            },
            {
              name: 'Cable Pulldowns',
              sets: [
                {
                  weight: 60,
                  reps: 8
                },
                {
                  weight: 60,
                  reps: 6
                },
                {
                  weight: 60,
                  reps: 5
                }
              ]
            },
            {
              name: 'Dumbell Curls',
              sets: [
                {
                  weight: 40,
                  reps: 8
                },
                {
                  weight: 40,
                  reps: 6
                },
                {
                  weight: 40,
                  reps: 5
                }
              ]
            }
          ]
        },
        {
          date: Date(),
          name: 'Chest and Triceps',
          excercises: [
            {
              name: 'Flat Barbell Bench Press',
              sets: [
                {
                  weight: 225,
                  reps: 10
                },
                {
                  weight: 225,
                  reps: 10
                },
                {
                  weight: 225,
                  reps: 10
                }
              ]
            },
            {
              name: 'Weighted Dips',
              sets: [
                {
                  weight: 180,
                  reps: 8
                },
                {
                  weight: 180,
                  reps: 6
                },
                {
                  weight: 180,
                  reps: 5
                }
              ]
            },
            {
              name: 'Incline Barbell Bench Press',
              sets: [
                {
                  weight: 60,
                  reps: 8
                },
                {
                  weight: 60,
                  reps: 6
                },
                {
                  weight: 60,
                  reps: 5
                }
              ]
            },
            {
              name: 'Tricep Pulldowns',
              sets: [
                {
                  weight: 40,
                  reps: 8
                },
                {
                  weight: 40,
                  reps: 6
                },
                {
                  weight: 40,
                  reps: 5
                }
              ]
            }
          ]
        },
        {
          date: Date(),
          name: 'Leg',
          excercises: [
            {
              name: 'Flat Barbell Bench Press',
              sets: [
                {
                  weight: 225,
                  reps: 10
                },
                {
                  weight: 225,
                  reps: 10
                },
                {
                  weight: 225,
                  reps: 10
                }
              ]
            },
            {
              name: 'Weighted Dips',
              sets: [
                {
                  weight: 180,
                  reps: 8
                },
                {
                  weight: 180,
                  reps: 6
                },
                {
                  weight: 180,
                  reps: 5
                }
              ]
            },
            {
              name: 'Incline Barbell Bench Press',
              sets: [
                {
                  weight: 60,
                  reps: 8
                },
                {
                  weight: 60,
                  reps: 6
                },
                {
                  weight: 60,
                  reps: 5
                }
              ]
            },
            {
              name: 'Tricep Pulldowns',
              sets: [
                {
                  weight: 40,
                  reps: 8
                },
                {
                  weight: 40,
                  reps: 6
                },
                {
                  weight: 40,
                  reps: 5
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>