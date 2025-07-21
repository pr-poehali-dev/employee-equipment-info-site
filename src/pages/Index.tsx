import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const equipmentCategories = [
    {
      id: 'portal-cranes',
      title: 'Портальные краны',
      description: 'Тяжелые подъемно-транспортные механизмы для портов и строительства',
      image: '/img/5457bc07-9871-4c8d-b316-2b0e42a6768c.jpg',
      items: [
        { name: 'Портальный кран ПК-40/12.5', specs: 'Грузоподъемность: 40т, Высота подъема: 12.5м', status: 'В работе' },
        { name: 'Кран козловой КК-20/32', specs: 'Грузоподъемность: 20т, Пролет: 32м', status: 'В работе' },
        { name: 'Контейнерный кран RTG-65', specs: 'Грузоподъемность: 65т, Досягаемость: 1+6+1', status: 'Плановое ТО' },
        { name: 'Кран портальный КПП-100', specs: 'Грузоподъемность: 100т, Высота подъема: 25м', status: 'В работе' }
      ]
    },
    {
      id: 'manufacturing',
      title: 'Производственное оборудование',
      description: 'Станки, конвейеры, роботизированные системы',
      image: '/img/96d434d0-8254-44b0-9aae-06b5350dcc07.jpg',
      items: [
        { name: 'CNC Станок модель X-200', specs: 'Точность: 0.01мм', status: 'В работе' },
        { name: 'Конвейерная линия KL-500', specs: 'Скорость: 50м/мин', status: 'В работе' },
        { name: 'Роботизированная рука RR-300', specs: 'Грузоподъемность: 25кг', status: 'Обслуживание' }
      ]
    },
    {
      id: 'office',
      title: 'Офисное оборудование',
      description: 'Компьютеры, принтеры, телекоммуникации',
      image: '/img/0c8489d6-3c36-4150-809f-93ed31873a55.jpg',
      items: [
        { name: 'Рабочая станция WS-2024', specs: 'RAM: 32GB, SSD: 1TB', status: 'В работе' },
        { name: 'Принтер лазерный LP-400', specs: 'Скорость: 40стр/мин', status: 'В работе' },
        { name: 'Сервер Dell PowerEdge', specs: 'CPU: Xeon, RAM: 128GB', status: 'В работе' }
      ]
    }
  ];

  const contacts = [
    { role: 'Технический директор', name: 'Иванов А.П.', phone: '+7 (495) 123-45-67', email: 'ivanov@company.ru' },
    { role: 'Начальник отдела оборудования', name: 'Петрова М.С.', phone: '+7 (495) 123-45-68', email: 'petrova@company.ru' },
    { role: 'Инженер по обслуживанию', name: 'Сидоров В.И.', phone: '+7 (495) 123-45-69', email: 'sidorov@company.ru' }
  ];

  const literature = [
    { title: 'Руководство по эксплуатации CNC станков', type: 'PDF', size: '2.5 MB', link: '#' },
    { title: 'Техническая документация конвейерных систем', type: 'PDF', size: '1.8 MB', link: '#' },
    { title: 'Инструкция по технике безопасности', type: 'PDF', size: '950 KB', link: '#' },
    { title: 'Каталог запасных частей 2024', type: 'PDF', size: '3.2 MB', link: '#' }
  ];

  return (
    <div className="min-h-screen bg-accent">
      {/* Header */}
      <header className="bg-primary text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-arial font-bold">Корпоративное оборудование</h1>
              <p className="text-blue-100 mt-1">Информационная система для сотрудников</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Phone" size={16} className="mr-2" />
                Поддержка
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto mb-8 bg-white">
            <TabsTrigger value="home" className="font-arial">Главная</TabsTrigger>
            <TabsTrigger value="catalog" className="font-arial">Разделы</TabsTrigger>
            <TabsTrigger value="contacts" className="font-arial">Контакты</TabsTrigger>
            <TabsTrigger value="literature" className="font-arial">Литература</TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6">
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <Icon name="Factory" size={64} className="mx-auto text-primary mb-4" />
              <h2 className="text-4xl font-arial font-bold text-primary mb-4">
                Добро пожаловать в систему управления оборудованием
              </h2>
              <p className="text-lg text-gray-700 font-times max-w-2xl mx-auto">
                Здесь вы найдете полную информацию о производственном и офисном оборудовании компании, 
                контактные данные ответственных лиц и техническую документацию.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader className="text-center">
                  <Icon name="Settings" size={48} className="mx-auto text-secondary mb-2" />
                  <CardTitle className="font-arial">Каталог оборудования</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-times text-center">
                    Полный перечень оборудования с техническими характеристиками и статусом
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: '0.1s'}}>
                <CardHeader className="text-center">
                  <Icon name="Users" size={48} className="mx-auto text-secondary mb-2" />
                  <CardTitle className="font-arial">Контакты специалистов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-times text-center">
                    Контактная информация технических специалистов и ответственных лиц
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CardHeader className="text-center">
                  <Icon name="BookOpen" size={48} className="mx-auto text-secondary mb-2" />
                  <CardTitle className="font-arial">Техническая документация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-times text-center">
                    Инструкции, руководства и техническая литература по эксплуатации
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Catalog Tab */}
          <TabsContent value="catalog" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex gap-4 mb-6">
                <Input
                  placeholder="Поиск оборудования..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Search" size={16} />
                </Button>
              </div>

              <div className="space-y-8">
                {equipmentCategories.map((category) => (
                  <div key={category.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-primary text-white p-4">
                      <h3 className="text-xl font-arial font-bold">{category.title}</h3>
                      <p className="text-blue-100 font-times">{category.description}</p>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="space-y-3">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="border-l-4 border-secondary pl-4">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-arial font-semibold text-gray-800">{item.name}</h4>
                                <Badge variant={item.status === 'В работе' ? 'default' : 'secondary'}>
                                  {item.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 font-times">{item.specs}</p>
                              <Button variant="outline" size="sm" className="mt-2">
                                <Icon name="ExternalLink" size={14} className="mr-1" />
                                Подробнее
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-arial font-bold text-primary mb-6">Контактная информация</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contacts.map((contact, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="font-arial text-lg">{contact.name}</CardTitle>
                      <p className="text-secondary font-times">{contact.role}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="Phone" size={16} className="text-gray-600" />
                        <span className="font-times">{contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Mail" size={16} className="text-gray-600" />
                        <span className="font-times">{contact.email}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <Icon name="MessageSquare" size={14} className="mr-1" />
                        Связаться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-4 bg-accent rounded-lg">
                <h3 className="font-arial font-semibold text-gray-800 mb-2">Общие контакты</h3>
                <div className="grid md:grid-cols-2 gap-4 font-times">
                  <div>
                    <p><strong>Адрес:</strong> г. Москва, ул. Промышленная, д. 15</p>
                    <p><strong>Телефон:</strong> +7 (495) 123-45-66</p>
                  </div>
                  <div>
                    <p><strong>Email:</strong> info@company.ru</p>
                    <p><strong>Режим работы:</strong> Пн-Пт 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Literature Tab */}
          <TabsContent value="literature" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-arial font-bold text-primary mb-6">Техническая литература</h2>
              
              <div className="space-y-4">
                {literature.map((doc, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Icon name="FileText" size={24} className="text-secondary" />
                        <div>
                          <h3 className="font-arial font-semibold text-gray-800">{doc.title}</h3>
                          <div className="flex gap-4 text-sm text-gray-600 font-times">
                            <span>Тип: {doc.type}</span>
                            <span>Размер: {doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" size={14} className="mr-1" />
                          Просмотр
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Download" size={14} className="mr-1" />
                          Скачать
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Info" size={20} className="text-secondary" />
                  <h3 className="font-arial font-semibold text-gray-800">Важная информация</h3>
                </div>
                <p className="font-times text-gray-700">
                  Документация регулярно обновляется. При возникновении вопросов обращайтесь к техническим специалистам. 
                  Все документы доступны только для внутреннего использования сотрудниками компании.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-times">© 2024 Корпоративная система управления оборудованием</p>
          <p className="text-gray-300 text-sm mt-2">Для внутреннего использования сотрудниками компании</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;