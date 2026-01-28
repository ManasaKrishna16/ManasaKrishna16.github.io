import React, { useState, useEffect } from 'react';
import { Pencil, Check, X } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface EditableTextProps {
    value: string | number;
    section: string;
    field: string;
    multiline?: boolean;
    className?: string;
}

const EditableText: React.FC<EditableTextProps> = ({
    value,
    section,
    field,
    multiline = false,
    className = ''
}) => {
    const { isAdmin } = useAdmin();
    const { updateNestedData, updateItemInArray } = usePortfolio();

    const [isEditing, setIsEditing] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);

    // Sync state if prop changes from external updates
    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    const handleSave = () => {
        // Determine path based on props
        // If section contains dots (e.g. "skills.categories.0.items.1"), we parse it
        // The previous implementation suggested usage like:
        // section="skills.categories.0.items.1" field="name"

        // We can construct the full path
        const fullPath = section ? `${section}.${field}` : field;
        const pathArray = fullPath.split('.');

        updateNestedData(pathArray, currentValue);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setCurrentValue(value);
        setIsEditing(false);
    };

    if (!isAdmin) {
        return <span className={className}>{value}</span>;
    }

    if (isEditing) {
        return (
            <div className="flex items-center gap-2 z-50 relative bg-background/80 p-1 rounded-md border border-primary/50">
                {multiline ? (
                    <Textarea
                        value={currentValue}
                        onChange={(e) => setCurrentValue(e.target.value)}
                        className="min-h-[100px] min-w-[300px]"
                        autoFocus
                    />
                ) : (
                    <Input
                        value={currentValue}
                        onChange={(e) => setCurrentValue(e.target.value)}
                        className="w-full min-w-[150px]"
                        autoFocus
                    />
                )}
                <div className="flex flex-col gap-1">
                    <Button size="icon" variant="ghost" onClick={handleSave} className="h-6 w-6 text-green-500 hover:text-green-600">
                        <Check size={14} />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={handleCancel} className="h-6 w-6 text-red-500 hover:text-red-600">
                        <X size={14} />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <span className={`relative group/edit cursor-pointer border-b border-transparent hover:border-primary/30 transition-colors ${className}`}>
            {value}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsEditing(true);
                }}
                className="absolute -top-3 -right-3 opacity-0 group-hover/edit:opacity-100 transition-opacity bg-primary text-primary-foreground rounded-full p-1 shadow-sm"
            >
                <Pencil size={10} />
            </button>
        </span>
    );
};

export default EditableText;
