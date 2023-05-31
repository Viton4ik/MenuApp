from django.contrib import admin

from .models import Category, Prescription, File


class CategoryAdmin(admin.ModelAdmin):
    """ Category panel upgrade """
    list_display = ('id', 'name',)
    search_fields = ('name', )
    list_filter = ('name', )


class FileAdmin(admin.ModelAdmin):
    """ Admin panel upgrade """
    list_display = ('id', 'name', 'file', )


class FileInline(admin.TabularInline):
    ''' to get mamyToMany objects'''
    model = Prescription.files.through  # указываем промежуточную модель
    extra = 1  # количество дополнительных строк для добавления файлов


class CategoryInline(admin.TabularInline):
    ''' to get mamyToMany objects'''
    model = Prescription.category.through
    extra = 1


class PrescriptionAdmin(admin.ModelAdmin):
    """ Prescription panel upgrade """
    list_display = ('id', 'name', 'description', 'createTime', )
    search_fields = ('name', 'files',)
    list_filter = ('name', 'files',)
    inlines = [FileInline, CategoryInline,]


admin.site.register(Category, CategoryAdmin)
admin.site.register(File, FileAdmin)
admin.site.register(Prescription, PrescriptionAdmin)
