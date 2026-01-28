import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';

interface AdminAddButtonProps {
    onAdd: () => void;
    addLabel?: string;
}

export const AdminAddButton: React.FC<AdminAddButtonProps> = ({ onAdd, addLabel = "Add Item" }) => {
    const { isAdmin } = useAdmin();

    if (!isAdmin) return null;

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={onAdd}
            className="border-dashed border-primary/50 text-primary hover:bg-primary/5 gap-2"
        >
            <Plus size={16} />
            {addLabel}
        </Button>
    );
};

interface AdminDeleteButtonProps {
    onDelete: () => void;
}

export const AdminDeleteButton: React.FC<AdminDeleteButtonProps> = ({ onDelete }) => {
    const { isAdmin } = useAdmin();

    if (!isAdmin) return null;

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
                e.stopPropagation(); // Prevent triggering parent edit modes if any
                if (confirm('Are you sure you want to delete this item?')) {
                    onDelete();
                }
            }}
            className="h-8 w-8 text-destructive hover:text-destructive/90 hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
            <Trash2 size={16} />
        </Button>
    );
};
