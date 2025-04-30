export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      auth_tokens: {
        Row: {
          created_at: string | null
          email: string
          expires_at: string
          id: number
          token: string
          used: boolean | null
        }
        Insert: {
          created_at?: string | null
          email: string
          expires_at: string
          id?: number
          token: string
          used?: boolean | null
        }
        Update: {
          created_at?: string | null
          email?: string
          expires_at?: string
          id?: number
          token?: string
          used?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_email"
            columns: ["email"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["email"]
          },
        ]
      }
      budgets: {
        Row: {
          amount: number
          category_id: number | null
          created_at: string | null
          end_date: string | null
          id: number
          is_active: boolean | null
          period: string
          start_date: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          category_id?: number | null
          created_at?: string | null
          end_date?: string | null
          id?: number
          is_active?: boolean | null
          period: string
          start_date?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          category_id?: number | null
          created_at?: string | null
          end_date?: string | null
          id?: number
          is_active?: boolean | null
          period?: string
          start_date?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "budgets_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "budgets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          color: string | null
          created_at: string | null
          id: number
          name: string
          type: string
          user_id: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: number
          name: string
          type: string
          user_id?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: number
          name?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      goals: {
        Row: {
          created_at: string | null
          current_amount: number | null
          description: string | null
          id: number
          is_completed: boolean | null
          name: string
          progress: number | null
          target_amount: number
          target_date: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          current_amount?: number | null
          description?: string | null
          id?: number
          is_completed?: boolean | null
          name: string
          progress?: number | null
          target_amount: number
          target_date: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          current_amount?: number | null
          description?: string | null
          id?: number
          is_completed?: boolean | null
          name?: string
          progress?: number | null
          target_amount?: number
          target_date?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "goals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      goals_categories: {
        Row: {
          category_id: number | null
          goal_id: number | null
          id: number
        }
        Insert: {
          category_id?: number | null
          goal_id?: number | null
          id?: number
        }
        Update: {
          category_id?: number | null
          goal_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "goals_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goals_categories_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "goals"
            referencedColumns: ["id"]
          },
        ]
      }
      n8n_chat_histories: {
        Row: {
          id: number
          message: Json | null
          session_id: string | null
        }
        Insert: {
          id?: number
          message?: Json | null
          session_id?: string | null
        }
        Update: {
          id?: number
          message?: Json | null
          session_id?: string | null
        }
        Relationships: []
      }
      transaçoes: {
        Row: {
          categoria: string | null
          created_at: string
          descricao: string | null
          id: number
          remote_id: string | null
          tipo: string | null
          valor: number | null
        }
        Insert: {
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: number
          remote_id?: string | null
          tipo?: string | null
          valor?: number | null
        }
        Update: {
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: number
          remote_id?: string | null
          tipo?: string | null
          valor?: number | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          attachments: Json | null
          category_id: number | null
          created_at: string | null
          date: string
          description: string
          id: number
          notes: string | null
          type: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          attachments?: Json | null
          category_id?: number | null
          created_at?: string | null
          date: string
          description: string
          id?: number
          notes?: string | null
          type: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          attachments?: Json | null
          category_id?: number | null
          created_at?: string | null
          date?: string
          description?: string
          id?: number
          notes?: string | null
          type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions_duplicate: {
        Row: {
          amount: number
          attachments: Json | null
          category_id: number | null
          created_at: string | null
          date: string
          description: string
          id: number
          notes: string | null
          type: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          attachments?: Json | null
          category_id?: number | null
          created_at?: string | null
          date: string
          description: string
          id?: number
          notes?: string | null
          type: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          attachments?: Json | null
          category_id?: number | null
          created_at?: string | null
          date?: string
          description?: string
          id?: number
          notes?: string | null
          type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_duplicate_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_duplicate_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          last_login: string | null
          password: string
          phone: string | null
          preferences: Json | null
          username: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          last_login?: string | null
          password: string
          phone?: string | null
          preferences?: Json | null
          username: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          last_login?: string | null
          password?: string
          phone?: string | null
          preferences?: Json | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
