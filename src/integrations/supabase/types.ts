export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      community_posts: {
        Row: {
          content: string
          created_at: string
          id: string
          is_approved: boolean | null
          post_type: Database["public"]["Enums"]["post_type"]
          reaction_count: number | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_approved?: boolean | null
          post_type: Database["public"]["Enums"]["post_type"]
          reaction_count?: number | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_approved?: boolean | null
          post_type?: Database["public"]["Enums"]["post_type"]
          reaction_count?: number | null
          user_id?: string
        }
        Relationships: []
      }
      daily_states: {
        Row: {
          created_at: string
          date: string
          energy_level: number | null
          id: string
          mood_level: number | null
          notes: string | null
          sleep_hours: number | null
          sleep_quality: number | null
          soreness_level: number | null
          stress_level: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          date?: string
          energy_level?: number | null
          id?: string
          mood_level?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          soreness_level?: number | null
          stress_level?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          energy_level?: number | null
          id?: string
          mood_level?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          soreness_level?: number | null
          stress_level?: number | null
          user_id?: string
        }
        Relationships: []
      }
      exercise_logs: {
        Row: {
          created_at: string
          date: string
          exercise_id: string
          id: string
          notes: string | null
          reps: number | null
          rpe: number | null
          set_number: number
          user_id: string
          weight_kg: number | null
          workout_exercise_id: string | null
        }
        Insert: {
          created_at?: string
          date?: string
          exercise_id: string
          id?: string
          notes?: string | null
          reps?: number | null
          rpe?: number | null
          set_number: number
          user_id: string
          weight_kg?: number | null
          workout_exercise_id?: string | null
        }
        Update: {
          created_at?: string
          date?: string
          exercise_id?: string
          id?: string
          notes?: string | null
          reps?: number | null
          rpe?: number | null
          set_number?: number
          user_id?: string
          weight_kg?: number | null
          workout_exercise_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercise_logs_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_logs_workout_exercise_id_fkey"
            columns: ["workout_exercise_id"]
            isOneToOne: false
            referencedRelation: "workout_exercises"
            referencedColumns: ["id"]
          },
        ]
      }
      exercises: {
        Row: {
          created_at: string
          description: string | null
          difficulty: Database["public"]["Enums"]["training_level"] | null
          equipment: string[] | null
          id: string
          muscle_group: Database["public"]["Enums"]["muscle_group"]
          name: string
          secondary_muscles:
            | Database["public"]["Enums"]["muscle_group"][]
            | null
          video_url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty?: Database["public"]["Enums"]["training_level"] | null
          equipment?: string[] | null
          id?: string
          muscle_group: Database["public"]["Enums"]["muscle_group"]
          name: string
          secondary_muscles?:
            | Database["public"]["Enums"]["muscle_group"][]
            | null
          video_url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty?: Database["public"]["Enums"]["training_level"] | null
          equipment?: string[] | null
          id?: string
          muscle_group?: Database["public"]["Enums"]["muscle_group"]
          name?: string
          secondary_muscles?:
            | Database["public"]["Enums"]["muscle_group"][]
            | null
          video_url?: string | null
        }
        Relationships: []
      }
      food_preferences: {
        Row: {
          created_at: string
          dietary_restrictions: string[] | null
          disliked_foods: string[] | null
          id: string
          intolerances: string[] | null
          liked_foods: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          dietary_restrictions?: string[] | null
          disliked_foods?: string[] | null
          id?: string
          intolerances?: string[] | null
          liked_foods?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          dietary_restrictions?: string[] | null
          disliked_foods?: string[] | null
          id?: string
          intolerances?: string[] | null
          liked_foods?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      habit_logs: {
        Row: {
          completed: boolean | null
          created_at: string
          date: string
          habit_id: string
          id: string
          notes: string | null
          user_id: string
        }
        Insert: {
          completed?: boolean | null
          created_at?: string
          date?: string
          habit_id: string
          id?: string
          notes?: string | null
          user_id: string
        }
        Update: {
          completed?: boolean | null
          created_at?: string
          date?: string
          habit_id?: string
          id?: string
          notes?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "habit_logs_habit_id_fkey"
            columns: ["habit_id"]
            isOneToOne: false
            referencedRelation: "habits"
            referencedColumns: ["id"]
          },
        ]
      }
      habits: {
        Row: {
          active: boolean | null
          adherence_rate: number | null
          created_at: string
          current_streak: number | null
          description: string | null
          frequency: string | null
          id: string
          longest_streak: number | null
          name: string
          priority: Database["public"]["Enums"]["habit_priority"] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          active?: boolean | null
          adherence_rate?: number | null
          created_at?: string
          current_streak?: number | null
          description?: string | null
          frequency?: string | null
          id?: string
          longest_streak?: number | null
          name: string
          priority?: Database["public"]["Enums"]["habit_priority"] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          active?: boolean | null
          adherence_rate?: number | null
          created_at?: string
          current_streak?: number | null
          description?: string | null
          frequency?: string | null
          id?: string
          longest_streak?: number | null
          name?: string
          priority?: Database["public"]["Enums"]["habit_priority"] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      hydration_logs: {
        Row: {
          activity_level: string | null
          climate: string | null
          consumed_ml: number | null
          created_at: string
          date: string
          id: string
          target_ml: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          activity_level?: string | null
          climate?: string | null
          consumed_ml?: number | null
          created_at?: string
          date?: string
          id?: string
          target_ml?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          activity_level?: string | null
          climate?: string | null
          consumed_ml?: number | null
          created_at?: string
          date?: string
          id?: string
          target_ml?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      journal_entries: {
        Row: {
          content: string | null
          created_at: string
          date: string
          energy_level: number | null
          gratitude: string[] | null
          id: string
          mood: string | null
          priorities: string[] | null
          reflections: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          date?: string
          energy_level?: number | null
          gratitude?: string[] | null
          id?: string
          mood?: string | null
          priorities?: string[] | null
          reflections?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string
          date?: string
          energy_level?: number | null
          gratitude?: string[] | null
          id?: string
          mood?: string | null
          priorities?: string[] | null
          reflections?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      nutrition_plans: {
        Row: {
          created_at: string
          date: string
          id: string
          meal_structure: Json | null
          notes: string | null
          target_calories: number | null
          target_carbs_g: number | null
          target_fat_g: number | null
          target_protein_g: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          date?: string
          id?: string
          meal_structure?: Json | null
          notes?: string | null
          target_calories?: number | null
          target_carbs_g?: number | null
          target_fat_g?: number | null
          target_protein_g?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          meal_structure?: Json | null
          notes?: string | null
          target_calories?: number | null
          target_carbs_g?: number | null
          target_fat_g?: number | null
          target_protein_g?: number | null
          user_id?: string
        }
        Relationships: []
      }
      post_reactions: {
        Row: {
          created_at: string
          id: string
          post_id: string
          reaction_type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          reaction_type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          reaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_reactions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          age: number | null
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          height_cm: number | null
          id: string
          onboarding_completed: boolean | null
          onboarding_step: number | null
          primary_goal: Database["public"]["Enums"]["goal_type"] | null
          sex: Database["public"]["Enums"]["sex"] | null
          sleep_target_time: string | null
          stress_level: Database["public"]["Enums"]["stress_level"] | null
          timezone: string | null
          training_level: Database["public"]["Enums"]["training_level"] | null
          updated_at: string
          user_id: string
          wake_target_time: string | null
          weight_kg: number | null
          work_end_time: string | null
          work_start_time: string | null
        }
        Insert: {
          age?: number | null
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          height_cm?: number | null
          id?: string
          onboarding_completed?: boolean | null
          onboarding_step?: number | null
          primary_goal?: Database["public"]["Enums"]["goal_type"] | null
          sex?: Database["public"]["Enums"]["sex"] | null
          sleep_target_time?: string | null
          stress_level?: Database["public"]["Enums"]["stress_level"] | null
          timezone?: string | null
          training_level?: Database["public"]["Enums"]["training_level"] | null
          updated_at?: string
          user_id: string
          wake_target_time?: string | null
          weight_kg?: number | null
          work_end_time?: string | null
          work_start_time?: string | null
        }
        Update: {
          age?: number | null
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          height_cm?: number | null
          id?: string
          onboarding_completed?: boolean | null
          onboarding_step?: number | null
          primary_goal?: Database["public"]["Enums"]["goal_type"] | null
          sex?: Database["public"]["Enums"]["sex"] | null
          sleep_target_time?: string | null
          stress_level?: Database["public"]["Enums"]["stress_level"] | null
          timezone?: string | null
          training_level?: Database["public"]["Enums"]["training_level"] | null
          updated_at?: string
          user_id?: string
          wake_target_time?: string | null
          weight_kg?: number | null
          work_end_time?: string | null
          work_start_time?: string | null
        }
        Relationships: []
      }
      sleep_logs: {
        Row: {
          actual_bedtime: string | null
          actual_waketime: string | null
          created_at: string
          date: string
          id: string
          notes: string | null
          pre_sleep_routine: Json | null
          quality: number | null
          target_bedtime: string | null
          target_waketime: string | null
          user_id: string
        }
        Insert: {
          actual_bedtime?: string | null
          actual_waketime?: string | null
          created_at?: string
          date?: string
          id?: string
          notes?: string | null
          pre_sleep_routine?: Json | null
          quality?: number | null
          target_bedtime?: string | null
          target_waketime?: string | null
          user_id: string
        }
        Update: {
          actual_bedtime?: string | null
          actual_waketime?: string | null
          created_at?: string
          date?: string
          id?: string
          notes?: string | null
          pre_sleep_routine?: Json | null
          quality?: number | null
          target_bedtime?: string | null
          target_waketime?: string | null
          user_id?: string
        }
        Relationships: []
      }
      supplement_plans: {
        Row: {
          created_at: string
          date: string
          id: string
          supplements: Json | null
          user_id: string
        }
        Insert: {
          created_at?: string
          date?: string
          id?: string
          supplements?: Json | null
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          supplements?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      supplements: {
        Row: {
          active: boolean | null
          benefits: string[] | null
          category: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          timing: Database["public"]["Enums"]["supplement_timing"][] | null
        }
        Insert: {
          active?: boolean | null
          benefits?: string[] | null
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          timing?: Database["public"]["Enums"]["supplement_timing"][] | null
        }
        Update: {
          active?: boolean | null
          benefits?: string[] | null
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          timing?: Database["public"]["Enums"]["supplement_timing"][] | null
        }
        Relationships: []
      }
      time_blocks: {
        Row: {
          category: string | null
          completed: boolean | null
          created_at: string
          date: string
          end_time: string
          energy_block: Database["public"]["Enums"]["energy_block"]
          id: string
          start_time: string
          task: string | null
          user_id: string
        }
        Insert: {
          category?: string | null
          completed?: boolean | null
          created_at?: string
          date?: string
          end_time: string
          energy_block: Database["public"]["Enums"]["energy_block"]
          id?: string
          start_time: string
          task?: string | null
          user_id: string
        }
        Update: {
          category?: string | null
          completed?: boolean | null
          created_at?: string
          date?: string
          end_time?: string
          energy_block?: Database["public"]["Enums"]["energy_block"]
          id?: string
          start_time?: string
          task?: string | null
          user_id?: string
        }
        Relationships: []
      }
      today_decisions: {
        Row: {
          ai_reasoning: string | null
          date: string
          generated_at: string
          hydration_decision: Json | null
          id: string
          nutrition_decision: Json | null
          priorities: string[] | null
          recovery_recommendation: string | null
          sleep_decision: Json | null
          supplement_decision: Json | null
          user_id: string
          workout_decision: Json | null
        }
        Insert: {
          ai_reasoning?: string | null
          date?: string
          generated_at?: string
          hydration_decision?: Json | null
          id?: string
          nutrition_decision?: Json | null
          priorities?: string[] | null
          recovery_recommendation?: string | null
          sleep_decision?: Json | null
          supplement_decision?: Json | null
          user_id: string
          workout_decision?: Json | null
        }
        Update: {
          ai_reasoning?: string | null
          date?: string
          generated_at?: string
          hydration_decision?: Json | null
          id?: string
          nutrition_decision?: Json | null
          priorities?: string[] | null
          recovery_recommendation?: string | null
          sleep_decision?: Json | null
          supplement_decision?: Json | null
          user_id?: string
          workout_decision?: Json | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
      workout_exercises: {
        Row: {
          created_at: string
          exercise_id: string
          id: string
          notes: string | null
          order_index: number
          target_reps: string | null
          target_rpe: number | null
          target_sets: number | null
          target_weight_kg: number | null
          workout_plan_id: string
        }
        Insert: {
          created_at?: string
          exercise_id: string
          id?: string
          notes?: string | null
          order_index: number
          target_reps?: string | null
          target_rpe?: number | null
          target_sets?: number | null
          target_weight_kg?: number | null
          workout_plan_id: string
        }
        Update: {
          created_at?: string
          exercise_id?: string
          id?: string
          notes?: string | null
          order_index?: number
          target_reps?: string | null
          target_rpe?: number | null
          target_sets?: number | null
          target_weight_kg?: number | null
          workout_plan_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workout_exercises_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_exercises_workout_plan_id_fkey"
            columns: ["workout_plan_id"]
            isOneToOne: false
            referencedRelation: "workout_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_plans: {
        Row: {
          completed: boolean | null
          completed_at: string | null
          created_at: string
          date: string
          estimated_duration_min: number | null
          id: string
          is_rest_day: boolean | null
          reason: string | null
          target_muscle_groups:
            | Database["public"]["Enums"]["muscle_group"][]
            | null
          user_id: string
          workout_type: Database["public"]["Enums"]["workout_type"]
        }
        Insert: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          date?: string
          estimated_duration_min?: number | null
          id?: string
          is_rest_day?: boolean | null
          reason?: string | null
          target_muscle_groups?:
            | Database["public"]["Enums"]["muscle_group"][]
            | null
          user_id: string
          workout_type: Database["public"]["Enums"]["workout_type"]
        }
        Update: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          date?: string
          estimated_duration_min?: number | null
          id?: string
          is_rest_day?: boolean | null
          reason?: string | null
          target_muscle_groups?:
            | Database["public"]["Enums"]["muscle_group"][]
            | null
          user_id?: string
          workout_type?: Database["public"]["Enums"]["workout_type"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["user_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      energy_block: "high" | "medium" | "low"
      goal_type:
        | "energy"
        | "performance"
        | "recomposition"
        | "consistency"
        | "strength"
        | "endurance"
      habit_priority: "critical" | "high" | "medium" | "low"
      muscle_group:
        | "chest"
        | "back"
        | "shoulders"
        | "biceps"
        | "triceps"
        | "legs"
        | "core"
        | "full_body"
      post_type: "progress" | "question" | "tip" | "motivation"
      sex: "male" | "female" | "other"
      stress_level: "low" | "moderate" | "high" | "very_high"
      supplement_timing:
        | "morning"
        | "pre_workout"
        | "post_workout"
        | "evening"
        | "before_bed"
      training_level: "beginner" | "intermediate" | "advanced" | "elite"
      user_role: "user" | "admin" | "moderator"
      workout_type:
        | "strength"
        | "hypertrophy"
        | "endurance"
        | "mobility"
        | "rest"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      energy_block: ["high", "medium", "low"],
      goal_type: [
        "energy",
        "performance",
        "recomposition",
        "consistency",
        "strength",
        "endurance",
      ],
      habit_priority: ["critical", "high", "medium", "low"],
      muscle_group: [
        "chest",
        "back",
        "shoulders",
        "biceps",
        "triceps",
        "legs",
        "core",
        "full_body",
      ],
      post_type: ["progress", "question", "tip", "motivation"],
      sex: ["male", "female", "other"],
      stress_level: ["low", "moderate", "high", "very_high"],
      supplement_timing: [
        "morning",
        "pre_workout",
        "post_workout",
        "evening",
        "before_bed",
      ],
      training_level: ["beginner", "intermediate", "advanced", "elite"],
      user_role: ["user", "admin", "moderator"],
      workout_type: [
        "strength",
        "hypertrophy",
        "endurance",
        "mobility",
        "rest",
      ],
    },
  },
} as const
